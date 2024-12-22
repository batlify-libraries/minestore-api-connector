import Context from '../../core/context';

export default class Referrals extends Context {

    /*
     * Apply referral code to user's cart
     * @Note Authorization is needed
     * @returns response
     * @throws Error
     */
    async apply(code: string) {
        return this.request(true, 'POST', '/cart/setReferral', {ref_code: code})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    /*
     * Remove referral code from user's cart
     * @Note Authorization is needed
     * @returns response
     * @throws Error
     */
    async remove() {
        return this.request(true, 'POST', '/cart/removeReferral')
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}