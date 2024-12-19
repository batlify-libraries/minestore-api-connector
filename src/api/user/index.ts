import {request, cookies} from '../../core/Instance';
import {errors} from '../../core/errors';

export const user = {
    async getUser() {
        if(!cookies.get('mscms_auth_token')) {
            return errors['401'];
        }
        return request('POST', '/user', {}, {'Authorization': 'Bearer ' + cookies.get('mscms_auth_token')})
            .then((response: any) => {
                return response;
            })
            .catch((e: any) => {
                throw e;
            });
    },
}