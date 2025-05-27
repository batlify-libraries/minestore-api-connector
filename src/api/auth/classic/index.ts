import Context from '../../../core/context';

type LoginResponse =
    | { status: 'banned' }
    | { status: 'success'; username: string; token: string }
    | { status: 'failed' };

/**
 * Handles classic username login.
 */
export default class AuthClassic extends Context {

    /**
     * Login user by username.
     *
     * @note Authorization isn't needed (obviously, it's login).
     *
     * @param {string} username - User's username.
     * @returns {Promise<LoginResponse>} Result of the login attempt.
     * @throws {Error} Throws if the request fails.
     */
    async login(username: string): Promise<LoginResponse> {
        try {
            const response = await this.request(false, 'POST', '/auth/username', { username }, null);

            if (response === 'banned') {
                return { status: 'banned' };
            }

            if (response && typeof response === 'string') {
                return { status: 'success', username, token: response };
            }

            return { status: 'failed' };
        } catch (e) {
            throw e;
        }
    }
}
