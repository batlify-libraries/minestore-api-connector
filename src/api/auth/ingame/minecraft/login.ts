import Context from '../../../../core/context';

export default class AuthMinecraft extends Context {

    /*
     * Login to MineStoreCMS
     * @param username Username
     * @param password Password
     * @returns response
     * @throws Error
     */
    async login(username: string, password: string) {
        return this.request(false, 'POST', '/auth/login', {username, password})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}