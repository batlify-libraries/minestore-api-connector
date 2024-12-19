import {request, cookies} from '../../../core/Instance';
import {errors} from '../../../core/errors';

export const productsForAuthorized = {
    async get(id: string) {
        if (!cookies.get('mscms_auth_token')) {
            return errors['401'];
        }
        return request('POST', `/items/get/${id}`, {}, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
    async getFromCategory(path: string) {
        if (!cookies.get('mscms_auth_token')) {
            return errors['401'];
        }
        return request('POST', `/categories/get/${path}`, {}, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
    async getFeatured() {
        if (!cookies.get('mscms_auth_token')) {
            return errors['401'];
        }
        return request('POST', `/items/getFeaturedDeals `, {}, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
}