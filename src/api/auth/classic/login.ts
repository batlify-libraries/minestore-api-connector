import {cookies, request} from "../../../core/Instance";

export const login = async (username: string) => {
    return request('POST', '/auth/username', {username: username})
        .then((response: any) => {
            // can't get by any other way... I am sorry
            if (response.length > 0) {
                cookies.set('mscms_auth_token', response);
                return true;
            }
            return false;
        })
        .catch((e: any) => {
            throw e;
        });
};