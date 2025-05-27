import Context from '../../../../core/context';

export default class Coupons extends Context {

    async check(token: string) {
        return this.request(true, 'POST', '/cart/getCoupon', {}, token)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    async remove(token: string) {
        return this.request(true, 'POST', '/cart/removeCoupon', {}, token)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}