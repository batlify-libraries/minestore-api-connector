import Context from '../../../core/context';

export default class AuthClassic extends Context {

    /*
     * Login user
     * @note Authorization isn't needed (obviously, it's login)
     * @param username User's username
     * @returns banned | success | failed
     * @throws Error
     */
    async login(username: string) {
        try {
            const response = await this.request(false, 'POST', '/auth/username', { username });

            if (response === 'banned') {
                return { status: 'banned' };
            }

            if (response && typeof response === 'string') {
                this.setCookie('mscms_auth_token', response);
                this.setCookie('mscms_auth_username', username);
                return { status: 'success' };
            }

            return { status: 'failed' };
        } catch (e) {
            throw e;
        }
    }
}
