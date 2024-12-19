import {cookies} from '../../core/Instance';
import {login as authClassic} from './classic/login';

export const auth = {
    async isLoggedIn() {
        const token = cookies.get('mscms_auth_token');
        return !!token;
    },

    async login(type: 'classic' | 'minecraft', username?: string) {
        if (type === 'classic') {
            if (!username) {
                throw new Error('Username is required');
            }
            return await authClassic(username);
        }
    },

    async logout() {
        cookies.remove('mscms_auth_token');
        return true;
    },
}