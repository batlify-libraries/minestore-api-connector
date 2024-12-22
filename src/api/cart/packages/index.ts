import Context from '../../../core/context';

export default class Packages extends Context {
    async add(id: string, promoted: boolean, payment_type: boolean) {
        return this.request(true, 'POST', `/cart/add/${id}?promoted=${promoted}&payment_type=${payment_type}`)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });

    }

    async remove(id: string) {
        return this.request(true, 'POST', `/cart/remove/${id}`)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    async quantity(id: string, quantity: number) {
        return this.request(true, 'POST', `/cart/reload/${id}?count=${quantity}`)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    async price(id: string, price: number) {
        return this.request(true, 'POST', `/cart/changePrice/${id}`, {price: price})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    async variable(id: string, variable: number, value: string) {
        return this.request(true, 'POST', `/cart/setVariable/${id}`, {var_id: variable, var_value: value})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    async selectServer(id: string, server: number) {
        return this.request(true, 'POST', `/cart/setSelectedServer/${id}`, {server_id: server})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}