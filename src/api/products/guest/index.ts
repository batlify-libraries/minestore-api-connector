import Context from '../../../core/context';

export default class ProductsGuest extends Context {

    /*
     * Get product by id
     * @Note Authorization isn't needed
     * @param id Product id
     * @returns response
     * @throws Error
     */
    async get(id: string) {
        return this.request(false, 'POST', `/items/get/guest/${id}`)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}