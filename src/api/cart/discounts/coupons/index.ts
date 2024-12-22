import Context from '../../../../core/context';

export default class Coupons extends Context {

    async check() {
        return this.request(true, 'POST', '/cart/getCoupon')
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    async remove() {
        return this.request(true, 'POST', '/cart/removeCoupon')
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}