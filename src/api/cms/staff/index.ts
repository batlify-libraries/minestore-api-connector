import {request} from '../../../core/Instance';

export const settings = {
    async get() {
        return request('GET', '/staff')
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
}