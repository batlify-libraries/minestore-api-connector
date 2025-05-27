import Context from '../../../core/context';

/**
 * Handles retrieval of patrons data.
 *
 * Provides publicly accessible list of patrons.
 */
export default class Patrons extends Context {

    /**
     * Get the list of patrons.
     *
     * @note Authorization is not required.
     *
     * @returns {Promise<any>} The patrons data from the server.
     * @throws {Error} If the request fails.
     */
    async get(): Promise<any> {
        return this.request(false, 'GET', "/patrons/get", {}, null)
            .then((response: any) => response)
            .catch((e: any) => { throw e; });
    }
}
