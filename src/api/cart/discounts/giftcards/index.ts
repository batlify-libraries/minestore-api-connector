import Context from '../../../../core/context';

export default class GiftCards extends Context {

    async check(token: string, code: string) {
        return this.request(true, 'POST', '/cart/getGift', {gift: code}, token)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    async remove(token: string) {
        return this.request(true, 'POST', '/cart/removeGiftcard', {}, token)
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}