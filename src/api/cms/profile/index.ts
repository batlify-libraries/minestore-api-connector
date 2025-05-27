import Context from '../../../core/context';

/**
 * Handles retrieval of user profiles.
 */
export default class Profile extends Context {

    /**
     * Get profile data for a specific user.
     *
     * @note Authorization is not required.
     *
     * @param {string} username - Username of the profile to retrieve.
     * @returns {Promise<any>} Profile data for the specified user.
     * @throws {Error} If the request fails.
     */
    async get(username: string): Promise<any> {
        return this.request(false, 'GET', `/profile/${username}`, {}, null)
            .then((response: any) => response)
            .catch((e: any) => { throw e; });
    }
}
