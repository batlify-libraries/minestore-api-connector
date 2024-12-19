import {request} from '../../../core/Instance';

export const settings = {
    async get() {
        return request('GET', '/settings')
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
}