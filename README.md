# MSCMS2 API Library

## Installation

npm:

```bash
npm install @batlify/mscms2-api
```

yarn:

```bash
yarn add @batlify/mscms2-api
```

pnpm:

```bash
pnpm add @batlify/mscms2-api
```

## Example of usage

```js
import { Auth, User } from '@batlify/mscms2-api';

class Test {
    protected auth: Auth;
    protected user: User;

    constructor() {
        this.auth = new Auth();
        this.user = new User();
    }

    async login(type: string, username: string) {
        try {
            const r = await this.auth.login(type, username);
            return r;
        } catch (error) {
            throw error;
        }
    }

    async fetchUser() {
        try {
            const userData = await this.user.get();
            return userData;
        } catch (error) {
            throw error;
        }
    }
}

const test = new Test();

(async () => {
    try {
        await test.login('classic', 'sxagondev')
            .then((r) => {
                if (r.status === 'success') {
                    console.log('Login successful');
                    test.fetchUser()
                        .then((r) => {
                            console.log('Fetched user data:', r);
                        })
                } else if (r.status === 'banned') {
                    console.log('You are banned from this store');
                } else {
                    console.log('An error occurred:', r);
                }
            });
    } catch (e) {
        console.error('An error occurred:', e);
    }
})();
```

## IMPORTANT

This library is a ~complete "backend" for MineStoreCMS v3 theme/frontend. It already stores the authorization
token and all important data in cookies itself. So there is no need to solve anything, as the library will do 80% of the
work for you. All you have to do is design and develop the frontend design.

**Docs**: https://minestorev3-api.ci.batlify.com/

## License

MIT © [Michal "Sxagon" Lipka](https://github.com/orgs/batlify/people/Sxagon)