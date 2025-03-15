import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';
import Cookies from 'universal-cookie';

dotenv.config();

export default class Context {

    protected cookies = new Cookies();
    private readonly apiUrl = process.env.NEXT_PUBLIC_API_URL || '';

    /*
      * Send request to your MineStoreCMS instance
      * @param authorize If it's true, uses Authorization header with token
      * @param method HTTP method (GET, POST, PUT, DELETE, PATCH)
      * @param url API endpoint (will be appended to apiUrl [https://store.domain.com/api/:your-endpoint])
      * @param body Request body
      * @returns Response data
      * @throws Error (e.g. 401 Unauthorized)
     */
    protected async request(
        authorize = false,
        method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
        url: string,
        body: Record<string, unknown> = {}
    ) {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };

        if (authorize) {
            const token = this.cookies.get('mscms_auth_token');
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            } else {
                return { code: 401, message: 'Unauthorized - need to be logged in' };
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

    public setCookie(key: string, value: string, maxAge = 60 * 60 * 24 * 7) {
        this.cookies.set(key, value, {
            path: '/',
            httpOnly: process.env.PETR_HTTP === 'true',
            secure: process.env.PETR_SECURE === 'true',
            sameSite: 'lax',
            maxAge: maxAge,
        });
    }
}
