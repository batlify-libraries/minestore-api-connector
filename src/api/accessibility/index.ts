import Context from '../../core/context';

/**
 * Handles accessibility checks for the site.
 *
 * This class allows checking whether the user's IP or country is allowed to access the site.
 */
export default class Accessibility extends Context {

    /**
     * Check if the user's IP or country is allowed to access the site.
     *
     * @note Authorization isn't needed.
     *
     * @returns {Promise<any>} The response from the server indicating access availability.
     * The structure of the response depends on your backend.
     *
     * @throws {Error} If the request fails or the server returns an error.
     */
    async check(): Promise<any> {
        return this.request(false, 'GET', '/checkAccessibility', {}, null)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}
