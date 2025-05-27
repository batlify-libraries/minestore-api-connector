import Context from '../../core/context';

/**
 * Handles payment-related operations.
 */
export default class Payment extends Context {

    /**
     * Get available payment methods.
     *
     * @note Authorization is needed.
     *
     * @param {string} token - Authorization token.
     * @returns {Promise<any>} List of payment methods.
     * @throws {Error} If the request fails.
     */
    async getMethods(token: string): Promise<any> {
        return this.request(true, 'POST', '/payments/get', {}, token)
            .then((response: any) => response)
            .catch((e: any) => { throw e; });
    }

    /**
     * Create a new payment.
     *
     * @note Authorization is needed.
     *
     * @param {string} token - Authorization token.
     * @param {any} data - Payment data payload.
     * @returns {Promise<any>} Payment creation response.
     * @throws {Error} If the request fails.
     */
    async create(token: string, data: any): Promise<any> {
        return this.request(true, 'POST', '/payments/create', data, token)
            .then((response: any) => response)
            .catch((e: any) => { throw e; });
    }
}
