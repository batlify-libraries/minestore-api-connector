import {request, cookies} from '../../../../core/Instance';
import {errors} from '../../../../core/errors';

export const coupons = {
    async check() {
        if(!cookies.get('mscms_auth_token')) {
            return errors['401'];
        }
        return request('POST', '/cart/getCoupon', {}, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
    async remove() {
        if (!cookies.get('mscms_auth_token')) {
            return errors['401'];
        }
        return request('POST', '/cart/removeCoupon', {}, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}