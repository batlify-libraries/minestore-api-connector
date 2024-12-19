import {cookies, request} from '../../../core/Instance';
import {errors} from '../../../core/errors';
import {giftCard} from './giftcards';
import {coupons} from './coupons';

export const discounts = {
    async check(type: 'giftcard' | 'coupon', code?: string) {
        if (type === 'giftcard') {
            if (!code) {
                throw new Error('Code is required');
            }
            return giftCard.check(code);
        }
        if (type === 'coupon') {
            // @TODO: ask Markus
            // why tf can't I check specific coupon code and coupon must be applied?
            // don't ask me why... it's just how it works ¯\_(ツ)_/¯
            return coupons.check();
        }
    },
    async apply(code: string) {
        if (!cookies.get('mscms_auth_token')) {
            return errors['401'];
        }
        return request('POST', '/cart/acceptCoupon', {coupon: code}, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
    async remove(type: 'giftcard' | 'coupon') {
        if (type === 'giftcard') {
            return giftCard.remove();
        }
        if (type === 'coupon') {
            return coupons.remove();
        }
    },
}