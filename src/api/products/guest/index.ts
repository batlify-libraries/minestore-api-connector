import Context from '../../../core/context';

/**
 * Handles products for non-logged-in users. */
export default class ProductsGuest extends Context {

    /**
     * Get a product by its ID (no authorization required).
     *
     * @note Authorization is not needed.
     *
     * @param {string} id - Product ID.
     * @returns {Promise<any>} Product data.
     * @throws {Error} If the request fails.
     */
    async get(id: string): Promise<any> {
        return this.request(false, 'POST', `/items/get/guest/${id}`, {}, null)
            .then((response: any) => response)
            .catch((e: any) => { throw e; });
    }

    /**
     * Get featured products (deals).
     *
     * @note Authorization is needed.
     *
     * @param {string} token - Authorization token.
     * @returns {Promise<any>} List of featured products.
     * @throws {Error} If the request fails.
     */
    async getFeatured(): Promise<any> {
        return this.request(true, 'POST', `/items/getFeaturedDeals`, {}, null)
            .then((response: any) => response)
            .catch((e: any) => { throw e; });
    }
}
