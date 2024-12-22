import Context from '../../core/context';

export default class Payment extends Context {

    /*
     * Get payment methods
     * @Note Authorization is needed
     * @returns response
     * @throws Error
     */
    async getMethods() {
        return this.request(true, 'POST', '/payments/get')
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    /*
     * Create payment
     * @Note Authorization is needed
     * @param data Payment data
     * @returns response
     * @throws Error
     */
    async create(data: any) {
        return this.request(true, 'POST', '/payments/create', data)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}