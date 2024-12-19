import {request} from '../../core/Instance';

export const categories = {
    async get() {
        return request('GET', '/categories/get')
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
}