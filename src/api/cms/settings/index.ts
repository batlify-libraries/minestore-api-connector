import Context from '../../../core/context';

export default class Settings extends Context {

    /*
     * Get webstore settings
     * @Note Authorization isn't needed
     * @returns response
     * @throws Error
     */
    async get() {
        return this.request(false, 'GET', '/settings')
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}