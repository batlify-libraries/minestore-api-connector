import Context from '../../core/context';
import Packages from './packages';

/**
 * Handles operations related to the shopping cart.
 *
 * This includes fetching cart data, manipulating packages,
 * and checking payment status.
 */
export default class Cart extends Context {

    private packages: Packages;

    constructor() {
        super();
        this.packages = new Packages();
    }

    /**
     * Get the contents of the cart.
     *
     * @note Authorization is required.
     *
     * @param {string} token - User's auth token.
     * @returns {Promise<any>} The cart data from the server.
     * @throws {Error} If the request fails.
     */
    async getCart(token: string): Promise<any> {
        return this.request(true, 'POST', '/cart/get', {}, token);
    }

    /**
     * Check if the cart is empty.
     *
     * @note Authorization is required.
     *
     * @param {string} token - User's auth token.
     * @returns {Promise<boolean>} True if cart is empty, otherwise false.
     * @throws {Error} If the request fails.
     */
    async isCartEmpty(token: string): Promise<boolean> {
        const response = await this.request(true, 'POST', '/cart/get', {}, token);
        return response.items.length === 0;
    }

    /**
     * Add a package to the cart.
     *
     * @note Authorization is required.
     *
     * @param {string} token - User's auth token.
     * @param {string} id - Package ID.
     * @param {boolean} promoted - Whether the package is promoted.
     * @param {boolean} payment_type - Payment type flag.
     * @returns {Promise<any>} Server response.
     * @throws {Error} If the request fails.
     */
    async addPackage(token: string, id: string, promoted: boolean, payment_type: boolean): Promise<any> {
        return this.packages.add(token, id, promoted, payment_type);
    }

    /**
     * Remove a package from the cart.
     *
     * @note Authorization is required.
     *
     * @param {string} token - User's auth token.
     * @param {string} id - Package ID.
     * @returns {Promise<any>} Server response.
     * @throws {Error} If the request fails.
     */
    async removePackage(token: string, id: string): Promise<any> {
        return this.packages.remove(token, id);
    }

    /**
     * Update the quantity of a package in the cart.
     *
     * @note Authorization is required.
     *
     * @param {string} token - User's auth token.
     * @param {string} id - Package ID.
     * @param {number} quantity - New quantity.
     * @returns {Promise<any>} Server response.
     * @throws {Error} If the request fails.
     */
    async quantityPackage(token: string, id: string, quantity: number): Promise<any> {
        return this.packages.quantity(token, id, quantity);
    }

    /**
     * Update the price of a package in the cart.
     *
     * @note Authorization is required.
     *
     * @param {string} token - User's auth token.
     * @param {string} id - Package ID.
     * @param {number} price - New price.
     * @returns {Promise<any>} Server response.
     * @throws {Error} If the request fails.
     */
    async pricePackage(token: string, id: string, price: number): Promise<any> {
        return this.packages.price(token, id, price);
    }

    /**
     * Set a variable for a package in the cart.
     *
     * @note Authorization is required.
     *
     * @param {string} token - User's auth token.
     * @param {string} id - Package ID.
     * @param {number} variable - Variable ID.
     * @param {string} value - Value to assign.
     * @returns {Promise<any>} Server response.
     * @throws {Error} If the request fails.
     */
    async variablePackage(token: string, id: string, variable: number, value: string): Promise<any> {
        return this.packages.variable(token, id, variable, value);
    }

    /**
     * Select a server for a package in the cart.
     *
     * @note Authorization is required.
     *
     * @param {string} token - User's auth token.
     * @param {string} id - Package ID.
     * @param {number} server - Server ID to assign.
     * @returns {Promise<any>} Server response.
     * @throws {Error} If the request fails.
     */
    async selectServerPackage(token: string, id: string, server: number): Promise<any> {
        return this.packages.selectServer(token, id, server);
    }

    /**
     * Get the list of servers that can be selected in the cart.
     *
     * @note Authorization is required.
     *
     * @param {string} token - User's auth token.
     * @returns {Promise<any>} List of selectable servers.
     * @throws {Error} If the request fails.
     */
    async getSelectableServers(token: string): Promise<any> {
        return this.request(true, 'POST', '/cart/getSelectServers', {}, token);
    }

    /**
     * Check the payment status of an order.
     *
     * @note Authorization is not required.
     *
     * @param {string} orderId - The ID of the order.
     * @returns {Promise<any>} Server response indicating payment status.
     * @throws {Error} If the request fails.
     */
    async checkStatus(orderId: string): Promise<any> {
        return this.request(true, 'POST', '/payments/checkStatus', { order_id: orderId }, null);
    }
}
