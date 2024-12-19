import {request, cookies} from '../../core/Instance';
import {errors} from '../../core/errors';

export const referrals = {
    async apply(code: string) {
        if (!cookies.get('mscms_auth_token')) {
            return errors['401'];
        }
        return request('POST', '/cart/setReferral', {ref_code: code}, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
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
        return request('POST', '/cart/removeReferral', {}, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}