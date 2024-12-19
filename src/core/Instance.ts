import axios, {AxiosResponse, RawAxiosRequestHeaders} from 'axios';
import dotenv from 'dotenv';
import Cookies from 'universal-cookie';
dotenv.config();

const instance = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL + '/api',
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
    },
});

/*
 * Makes a request to the MineStoreCMS API
 * @param method HTTP method
 * @param url API endpoint
 * @param body Request body
 * @param headers Request headers
 */
export const request = async <T>(
    method: "GET" | "POST" | "PUT" | "DELETE" | "PATCH",
    url: string,
    body: Record<string, unknown> = {},
    headers: RawAxiosRequestHeaders = {}
): Promise<T> => {
    const response: AxiosResponse<T> = await instance({
        method,
        url,
        data: body,
        headers: {
            ...instance.defaults.headers.common,
            ...headers,
        },
    });
    return response.data;
};

export const cookies = new Cookies();
