import Context from '../../core/context';

/**
 * Handles referral code operations for user's cart.
 */
export default class Referrals extends Context {

    /**
     * Apply referral code to the user's cart.
     *
     * @note Authorization is needed.
     *
     * @param {string} code - Referral code to apply.
     * @param {string} token - Authorization token.
     * @returns {Promise<any>} Response from the server.
     * @throws {Error} If the request fails.
     */
    async apply(code: string, token: string): Promise<any> {
        return this.request(true, 'POST', '/cart/setReferral', { ref_code: code }, token)
            .then((response: any) => response)
            .catch((e: any) => { throw e; });
    }

    /**
     * Remove referral code from the user's cart.
     *
     * @note Authorization is needed.
     *
     * @param {string} token - Authorization token.
     * @returns {Promise<any>} Response from the server.
     * @throws {Error} If the request fails.
     */
    async remove(token: string): Promise<any> {
        return this.request(true, 'POST', '/cart/removeReferral', {}, token)
            .then((response: any) => response)
            .catch((e: any) => { throw e; });
    }
}
