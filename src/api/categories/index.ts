import Context from '../../core/context';

/**
 * Handles operations related to product categories.
 *
 * Provides access to public list of available categories.
 */
export default class Categories extends Context {

    /**
     * Retrieve all available categories.
     *
     * @note Authorization is not required.
     *
     * @returns {Promise<any>} A list of categories from the backend.
     * @throws {Error} If the request fails or the server returns an error.
     */
    async get(): Promise<any> {
        return this.request(false, 'GET', '/categories/get', {}, null)
            .then((response: any) => response)
            .catch((e: any) => { throw e; });
    }
}
