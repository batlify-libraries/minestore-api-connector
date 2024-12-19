import {request, cookies} from '../../../../core/Instance';
import {errors} from '../../../../core/errors';
export const giftCard = {
    async check(code: string) {
        return request('POST', '/cart/getGift', {gift: code})
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
        return request('POST', '/cart/removeGiftcard', {}, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}