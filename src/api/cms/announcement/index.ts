import Context from '../../../core/context';

/**
 * Handles retrieval of site-wide announcements.
 *
 * Publicly available endpoint to fetch current announcement.
 */
export default class Announcement extends Context {

    /**
     * Get the current announcement.
     *
     * @note Authorization is not required.
     *
     * @returns {Promise<any>} The current announcement content.
     * @throws {Error} If the request fails.
     */
    async get(): Promise<any> {
        return this.request(false, 'GET', '/announcement/get', {}, null)
            .then((response: any) => response)
            .catch((e: any) => { throw e; });
    }
}
