import Context from '../../../core/context';

/**
 * Handles retrieval of dynamic CMS pages.
 *
 * Provides access to publicly available pages based on their URL path.
 */
export default class Pages extends Context {

    /**
     * Fetch a CMS page by its URL path.
     *
     * @note Authorization is not required.
     *
     * @param {string} path - The relative URL path of the requested page (e.g. "/about-us").
     * @returns {Promise<any>} The page content and metadata.
     * @throws {Error} If the request fails.
     */
    async get(path: string): Promise<any> {
        return this.request(false, 'POST', '/pages/get', { url: path }, null)
            .then((response: any) => response)
            .catch((e: any) => { throw e; });
    }
}
