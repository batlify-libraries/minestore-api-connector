import Context from '../../../../core/context';

export default class GiftCards extends Context {

    async check(code: string) {
        return this.request(true, 'POST', '/cart/getGift', {gift: code})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }

    async remove() {
        return this.request(true, 'POST', '/cart/removeGiftcard')
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    }
}