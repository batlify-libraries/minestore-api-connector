import {request, cookies} from '../../core/Instance';
import {errors} from '../../core/errors';
import {packages} from './packages';

export const cart = {
    async getCart() {
        if (!cookies.get('mscms_auth_token')) {
            return errors['401'];
        }
        return request('POST', '/cart/get', {}, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
    async addPackage(id: string, promoted: boolean, payment_type: boolean) {
        return packages.add(id, promoted, payment_type);
    },
    async removePackage(id: string) {
        return packages.remove(id);
    },
    async quantityPackage(id: string, quantity: number) {
        return packages.quantity(id, quantity);
    },
    async pricePackage(id: string, price: number) {
        return packages.price(id, price);
    },
    async variablePackage(id: string, variable: number, value: string) {
        return packages.variable(id, variable, value);
    },
    async selectServerPackage(id: string, server: number) {
        return packages.selectServer(id, server);
    },
    async getSelectableServers() {
        if (!cookies.get('mscms_auth_token')) {
            return errors['401'];
        }
        return request('POST', '/cart/getSelectServers', {}, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
}