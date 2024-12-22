import Context from '../../../core/context';

export default class Pages extends Context {

    /*
     * Get pages
     * @Note Authorization isn't needed
     * @returns response
     * @throws Error
     */
    async get(path: string) {
        return this.request(false, 'POST', '/pages/get', {url: path})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}