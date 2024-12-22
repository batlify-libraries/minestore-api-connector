# MSCMS2 API Library

## Installation

npm:

```bash
npm install mscms2-api
```

yarn:

```bash
yarn add mscms2-api
```

pnpm:

```bash
pnpm add mscms2-api
```

## Example of usage

```js
import { Auth, User } from 'mscms2-api';

export default class Test {
    
    protected auth: Auth;
    protected user: User;
    
    constructor() {
        this.auth = new Auth();
        this.user = new User();
        
    }

    async login(username: string) {
        const response = await this.auth.login(username);
        console.log(response);
    }

    async getUser() {
        const response = await this.user.get();
        console.log(response);
    }
}

const test = new Test();

test.login('sxagondev').then(() => {
    test.getUser().then((r) => {
        console.log(r); // Magic!
    });
});
```

## IMPORTANT

This library is a ~complete "backend" for MineStoreCMS v3 theme/frontend. It already stores the authorization
token and all important data in cookies itself. So there is no need to solve anything, as the library will do 80% of the
work for you. All you have to do is design and develop the frontend design.

**Docs**: https://minestorev3-api.ci.batlify.com/

## License

MIT © [Michal "Sxagon" Lipka](https://github.com/sxagon/mscms2-api)