import Context from '../../../../core/context';

/**
 * Handles Minecraft in-game authentication.
 *
 * Provides methods to initiate and check authentication for a Minecraft username.
 */
export default class AuthMinecraft extends Context {

    /**
     * Initiate the Minecraft login process.
     *
     * This method begins the in-game authentication process by notifying the backend.
     *
     * @param {string} username - The Minecraft username to initiate login for.
     * @returns {Promise<any>} The server response, structure depends on backend implementation.
     *
     * @throws {Error} If the request fails or the server returns an error.
     */
    async init(username: string): Promise<any> {
        return this.request(false, 'POST', `/game_auth/init/${username}`, {}, null)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    /**
     * Check the status of Minecraft login.
     *
     * This method checks whether the in-game authentication has been completed for the given username.
     *
     * @param {string} username - The Minecraft username to check login status for.
     * @returns {Promise<any>} The server response, which may indicate success, waiting, or failure.
     *
     * @throws {Error} If the request fails or the server returns an error.
     */
    async check(username: string): Promise<any> {
        return this.request(false, 'POST', `/game_auth/check/${username}`, {}, null)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}
