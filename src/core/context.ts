import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';
import Cookies from 'universal-cookie';

dotenv.config();

const isServer = typeof window === 'undefined';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface CookieOptions {
    path?: string;
    httpOnly?: boolean;
    secure?: boolean;
    sameSite?: 'lax' | 'strict' | 'none';
    maxAge?: number;
}

export default class Context {
    protected cookies: Cookies;
    private readonly apiUrl: string;

    constructor(cookieHeader?: string) {
        this.cookies = new Cookies(cookieHeader || undefined);
        this.apiUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
    }

    protected async request(
        authorize: boolean = false,
        method: HttpMethod,
        url: string,
        body: Record<string, unknown> = {}
    ): Promise<any> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };

        if (authorize) {
            const token = this.getCookie('mscms_auth_token');
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            } else {
                return {
                    code: 401,
                    message: 'Unauthorized - need to be logged in',
                };
            }
        }

        try {
            const response: AxiosResponse = await axios({
                method,
                url: `${this.apiUrl}/api${url}`,
                data: body,
                headers,
                withCredentials: true,
            });

            return response.data;
        } catch (error: any) {
            throw error.response?.data || new Error('An unknown error occurred');
        }
    }

    public setCookie(
        key: string,
        value: string,
        maxAge: number = 60 * 60 * 24 * 7
    ): void {
        const options: CookieOptions = {
            path: '/',
            httpOnly: process.env.PETR_HTTP === 'true',
            secure: process.env.PETR_SECURE === 'true',
            sameSite: 'lax',
            maxAge,
        };

        if (isServer) {
            try {
                const { cookies } = require('next/headers');
                const serverCookies = cookies();
                serverCookies.set({
                    name: key,
                    value,
                    ...options,
                });
            } catch {
                throw new Error('Failed to set cookie on server');
            }
        } else {
            this.cookies.set(key, value, options);
        }
    }

    public getCookie(key: string): string | undefined {
        return this.cookies.get(key);
    }

    public removeCookie(key: string): void {
        if (isServer) {
            try {
                const { cookies } = require('next/headers');
                const serverCookies = cookies();
                serverCookies.delete(key);
            } catch {
                throw new Error('Failed to remove cookie on server');
            }
        } else {
            this.cookies.remove(key, { path: '/' });
        }
    }
}
