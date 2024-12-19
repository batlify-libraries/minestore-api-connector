import {request, cookies} from '../../core/Instance';

export const payment = {
    async getMethods() {
        if (!cookies.get('mscms_auth_token')) {
            return;
        }
        return request('POST', '/payments/get', {}, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
    async create(data: any) {
        if (!cookies.get('mscms_auth_token')) {
            return;
        }
        return request('POST', '/payments/create', data, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
}