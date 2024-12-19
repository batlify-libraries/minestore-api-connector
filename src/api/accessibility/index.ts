import {request} from '../../core/Instance';

export const accessibility = {
    async check() {
        return request('GET', '/checkAccessibility')
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
}