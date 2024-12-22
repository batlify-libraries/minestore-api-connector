import Context from '../../core/context';
import AuthClassic from './classic/login';

export default class Auth extends Context {
    private authClassic: AuthClassic;

    constructor() {
        super();
        this.authClassic = new AuthClassic();
    }

    /*
     * Check if user is logged in
     * @note Authorization isn't needed (obviously, it's login check)
     * @returns true | false
     */
    async isLoggedIn() {
        const token = this.cookies.get('mscms_auth_token');
        return !!token;
    }

    /*
     * Login user
     * @note Authorization isn't needed (obviously, it's login)
     * @param username User's username
     * @returns banned | success | failed
     * @throws Error
     */
    async login(type: 'classic' | 'minecraft', username?: string) {
        if (type === 'classic') {
            if (!username) {
                throw new Error('Username is required');
            }
            return await this.authClassic.login(username);
        }

        throw new Error('Unsupported login type');
    }

    /*
     * Logout user
     * @note Authorization isn't needed, it's just cookies clear
     * @returns true | false
     */
    async logout() {
        try {
            this.cookies.remove('mscms_auth_token');
            return true;
        } catch (e) {
            return false;
        }
    }
}
