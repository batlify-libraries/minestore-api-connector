import Context from '../../../core/context';

export default class ProductsAuthorized extends Context {

    /*
     * Get product by id
     * @Note Authorization is needed
     * @param id Product id
     * @returns response
     * @throws Error
     */
    async get(id: string) {
        return this.request(true, 'POST', `/items/get/${id}`)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    /*
     * Get products by category
     * @Note Authorization is needed
     * @param path Category path
     * @returns response
     * @throws Error
     */
    async getFromCategory(path: string) {
        return this.request(true, 'POST', `/categories/get/${path}`)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    /*
     * Get featured products
     * @Note Authorization is needed
     * @returns response
     * @throws Error
     */
    async getFeatured() {
        return this.request(true, 'POST', `/items/getFeaturedDeals `)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}