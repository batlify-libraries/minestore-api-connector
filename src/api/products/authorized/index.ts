import Context from '../../../core/context';

/**
 * Handles products for logged-in users.
 */
export default class ProductsAuthorized extends Context {

    /**
     * Get a product by its ID.
     *
     * @note Authorization is needed.
     *
     * @param {string} token - Authorization token.
     * @param {string} id - Product ID.
     * @returns {Promise<any>} Product data.
     * @throws {Error} If the request fails.
     */
    async get(token: string, id: string): Promise<any> {
        return this.request(true, 'POST', `/items/get/${id}`, {}, token)
            .then((response: any) => response)
            .catch((e: any) => { throw e; });
    }

    /**
     * Get products from a specific category.
     *
     * @note Authorization is needed.
     *
     * @param {string} token - Authorization token.
     * @param {string} path - Category path.
     * @returns {Promise<any>} List of products in the category.
     * @throws {Error} If the request fails.
     */
    async getFromCategory(token: string, path: string): Promise<any> {
        return this.request(true, 'POST', `/categories/get/${path}`, {}, token)
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
    async getFeatured(token: string): Promise<any> {
        return this.request(true, 'POST', `/items/getFeaturedDeals`, {}, token)
            .then((response: any) => response)
            .catch((e: any) => { throw e; });
    }
}
