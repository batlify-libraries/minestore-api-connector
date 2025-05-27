import Context from '../../../core/context';

/**
 * Handles retrieval of webstore settings.
 */
export default class Settings extends Context {

    /**
     * Get webstore settings.
     *
     * @note Authorization is not required.
     *
     * @returns {Promise<any>} The settings data from the server.
     * @throws {Error} If the request fails.
     */
    async get(): Promise<any> {
        return this.request(false, 'GET', '/settings/get', {}, null)
            .then((response: any) => response)
            .catch((e: any) => { throw e; });
    }
}
