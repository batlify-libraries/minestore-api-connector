import Context from '../../../core/context';

export default class Packages extends Context {
    async add(token: string, id: string, promoted: boolean, payment_type: boolean) {
        return this.request(true, 'POST', `/cart/add/${id}?promoted=${promoted}&payment_type=${payment_type}`, {}, token)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });

    }

    async remove(token: string, id: string) {
        return this.request(true, 'POST', `/cart/remove/${id}`, {}, token)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    async quantity(token: string, id: string, quantity: number) {
        return this.request(true, 'POST', `/cart/reload/${id}?count=${quantity}`, {}, token)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    async price(token: string, id: string, price: number) {
        return this.request(true, 'POST', `/cart/changePrice/${id}`, {price: price}, token)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    async variable(token: string, id: string, variable: number, value: string) {
        return this.request(true, 'POST', `/cart/setVariable/${id}`, {var_id: variable, var_value: value}, token)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    async selectServer(token: string, id: string, server: number) {
        return this.request(true, 'POST', `/cart/setSelectedServer/${id}`, {server_id: server}, token)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}