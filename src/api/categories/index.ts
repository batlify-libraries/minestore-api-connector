import Context from '../../core/context';

export default class Categories extends Context {

    /*
     * Get categories
     * @Note Authorization isn't needed
     * @returns response
     * @throws Error
     */
    async get() {
        return this.request(false, 'GET', '/categories/get')
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}