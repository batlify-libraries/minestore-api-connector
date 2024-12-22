import Context from '../../core/context';

export default class Accessibility extends Context {

    /*
     * Check if user's ip/country is available to visit the site
     * @Note Authorization isn't needed
     * @returns response
     * @throws Error
     */
    async check() {
        return this.request(false, 'GET', '/checkAccessibility')
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}