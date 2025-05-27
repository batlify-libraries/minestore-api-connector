import axios, { AxiosResponse } from 'axios';
import dotenv from 'dotenv';

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

/**
 * Base Context class for making API requests with optional authorization.
 * Handles cookies and sets base API URL from environment variables.
 */
export default class Context {
    private readonly apiUrl: string;

    /**
     * Creates an instance of Context.
     */
    constructor() {
        this.apiUrl = process.env.NEXT_PUBLIC_API_URL ?? '';
    }

    /**
     * Make an HTTP request to the API.
     *
     * @param {boolean} authorize - Whether the request requires authorization.
     * @param {HttpMethod} method - HTTP method to use.
     * @param {string} url - API endpoint URL (relative to base).
     * @param {Record<string, unknown>} [body={}] - Request body payload.
     * @param {string|null} token - Authorization token (if needed).
     * @returns {Promise<any>} Resolves with response data or rejects with error.
     * @throws Will throw an error if request fails or authorization token is missing when needed.
     */
    protected async request(
        authorize: boolean = false,
        method: HttpMethod,
        url: string,
        body: Record<string, unknown> = {},
        token: string | null
    ): Promise<any> {
        const headers: Record<string, string> = {
            'Content-Type': 'application/json',
        };

        if (authorize) {
            if (token) {
                headers['Authorization'] = `Bearer ${token}`;
            } else {
                // Instead of returning an error object, consider throwing an error:
                throw new Error('Unauthorized - need to be logged in');
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
            // If API sends error response data, throw it; otherwise, throw generic error.
            throw error.response?.data || new Error('An unknown error occurred');
        }
    }
}
