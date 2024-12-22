import Context from '../../core/context';

export default class User extends Context {

    /*
     * Get user's data
     * @Note Authorization is needed
     * @throws Error
     */
    async getUser() {
        return this.request(true, 'POST', '/user')
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}