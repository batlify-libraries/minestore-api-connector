import {cookies, request} from '../../../core/Instance';
import {errors} from '../../../core/errors';

export const packages = {
    async add(id: string, promoted: boolean, payment_type: boolean) {
        if (!cookies.get('mscms_auth_token')) {
            return errors['401'];
        }
        return request('POST', `/cart/add/${id}?promoted=${promoted}&payment_type=${payment_type}`, {
            promoted,
            payment_type,
        }, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });

    },
    async remove(id: string) {
        if (!cookies.get('mscms_auth_token')) {
            return errors['401'];
        }
        return request('POST', `/cart/remove/${id}`, {}, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
    async quantity(id: string, quantity: number) {
        if (!cookies.get('mscms_auth_token')) {
            return errors['401'];
        }
        return request('POST', `/cart/reload/${id}?count=${quantity}`, {}, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
    async price(id: string, price: number) {
        if (!cookies.get('mscms_auth_token')) {
            return errors['401'];
        }
        return request('POST', `/cart/changePrice/${id}`, {price: price}, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
    async variable(id: string, variable: number, value: string) {
        if (!cookies.get('mscms_auth_token')) {
            return errors['401'];
        }
        return request('POST', `/cart/setVariable/${id}`, {var_id: variable, var_value: value}, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
    async selectServer(id: string, server: number) {
        if (!cookies.get('mscms_auth_token')) {
            return errors['401'];
        }
        return request('POST', `/cart/setSelectedServer/${id}`, {server_id: server}, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
}