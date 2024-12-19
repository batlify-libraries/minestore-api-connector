import {request} from '../../../core/Instance';

export const profile = {
    async get(username: string) {
        return request('GET', `/profile/${username}`)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
}