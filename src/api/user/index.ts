import Context from '../../core/context';

/**
 * Handles user-related operations.
 */
export default class User extends Context {

    /**
     * Get user's data.
     *
     * @note Authorization is needed.
     *
     * @param {string} token - Authorization token.
     * @returns {Promise<any>} User data.
     * @throws {Error} If the request fails.
     */
    async getUser(token: string): Promise<any> {
        return this.request(true, 'POST', '/user', {}, token)
            .then((response: any) => response)
            .catch((e: any) => { throw e; });
    }
}
