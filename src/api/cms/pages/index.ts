import {request} from '../../../core/Instance';

export const pages = {
    async get(path: string) {
        return request('POST', '/pages/get', {url: path})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
}