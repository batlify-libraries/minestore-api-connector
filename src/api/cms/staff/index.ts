import Context from '../../../core/context';

export default class Staff extends Context {
    async get() {
        return this.request(false, 'GET', '/staff')
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}