import {request} from '../../../core/Instance';

export const productsForGuest = {
    async get(id: string) {
        return request('POST', `/items/get/guest/${id}`)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
}