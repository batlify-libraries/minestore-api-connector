import Context from '../../../core/context';

/**
 * Handles Discord OAuth authentication.
 *
 * This class provides a method to initiate the Discord login flow
 * by retrieving the OAuth URL from the backend.
 */
export default class AuthDiscord extends Context {

    /**
     * Get the Discord OAuth URL to initiate login.
     *
     * @note Authorization isn't needed.
     *
     * @returns {Promise<{ url: string }>} The URL used to redirect the user to Discord's OAuth consent screen.
     *
     * @throws {Error} If the request fails or an error occurs while fetching the URL.
     */
    async getUrl(): Promise<{ url: string }> {
        try {
            const response = await this.request(false, 'POST', '/auth/discord', {}, null);
            return { url: response.url };
        } catch (e) {
            throw e;
        }
    }
}
