import {request} from '../../../core/Instance';

export const announcements = {
    async get() {
        return request('GET', '/announcement/get')
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
}