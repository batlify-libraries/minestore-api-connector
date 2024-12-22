import Context from '../../../core/context';
import GiftCards from './giftcards';
import Coupons from './coupons';

export default class Discounts extends Context {

    protected giftCards: GiftCards;
    protected coupons: Coupons;

    constructor() {
        super();
        this.giftCards = new GiftCards();
        this.coupons = new Coupons();
    }

    /*
     * Check discount
     * @param type giftcard | coupon
     * @param code giftcard/coupon code
     * @throws Error
     */
    async check(type: 'giftcard' | 'coupon', code?: string) {
        if (type === 'giftcard') {
            if (!code) {
                throw new Error('Code is required');
            }
            return this.giftCards.check(code);
        }
        if (type === 'coupon') {
            // why tf can't I check specific coupon code and coupon must be applied?
            // don't ask me why... it's just how it works ¯\_(ツ)_/¯
            return this.coupons.check();
        }
    }

    /*
     * Apply discount
     * @param code coupon code
     * @throws Error
     */
    async apply(code: string) {
        return this.request(true, 'POST', '/cart/acceptCoupon', {coupon: code})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    /*
      * Remove discount
      * @param type giftcard | coupon
      * @throws Error
     */
    async remove(type: 'giftcard' | 'coupon') {
        if (type === 'giftcard') {
            return this.giftCards.remove();
        }
        if (type === 'coupon') {
            return this.coupons.remove();
        }
    }
}