import Context from '../../core/context';
import Packages from './packages';

export default class Cart extends Context {

    private packages: Packages;

    constructor() {
        super();
        this.packages = new Packages();
    }

    /*
     * Get cart's data
     * @Note Authorization is needed
     * @param response
     * @throws Error
     */
    async getCart() {
        return this.request(true, 'POST', '/cart/get')
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    /*
     * Check if cart is empty
     * @Note Authorization is needed
     * @param response
     * @throws Error
     */
    async isCartEmpty() {
        return this.request(true, 'POST', '/cart/get')
            .then((response: any) => {
                return response.items.length === 0;

            })
            .catch((e: any) => {
                throw e;
            });
    }

    /*
     * Add package to cart
     * @Note Authorization is needed
     * @param response
     * @throws Error
     */
    async addPackage(id: string, promoted: boolean, payment_type: boolean) {
        return this.packages.add(id, promoted, payment_type);
    }

    /*
     * Remove package from cart
     * @Note Authorization is needed
     * @param response
     * @throws Error
     */
    async removePackage(id: string) {
        return this.packages.remove(id);
    }

    /*
     * Update package's quantity in cart
     * @Note Authorization is needed
     * @param response
     * @throws Error
     */
    async quantityPackage(id: string, quantity: number) {
        return this.packages.quantity(id, quantity);
    }

    /*
     * Update package's price in cart
     * @Note Authorization is needed
     * @param response
     * @throws Error
     */
    async pricePackage(id: string, price: number) {
        return this.packages.price(id, price);
    }

    /*
     * Update package's variable in cart
     * @Note Authorization is needed
     * @param response
     * @throws Error
     */
    async variablePackage(id: string, variable: number, value: string) {
        return this.packages.variable(id, variable, value);
    }

    /*
     * Update package's variable in cart
     * @Note Authorization is needed
     * @param response
     * @throws Error
     */
    async selectServerPackage(id: string, server: number) {
        return this.packages.selectServer(id, server);
    }

    /*
     * Get selectable servers
     * @Note Authorization is needed
     * @param response
     * @throws Error
     */
    async getSelectableServers() {
        return this.request(true, 'POST', '/cart/getSelectServers')
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}