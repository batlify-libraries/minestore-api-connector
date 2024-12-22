import Context from '../../../core/context';

export default class Announcement extends Context {

    /*
     * Get announcement
     * @Note Authorization isn't needed
     * @returns response
     * @throws Error
     */
    async get() {
        return this.request(false, 'GET', '/announcement/get')
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}