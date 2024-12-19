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
import {auth, user} from 'mscms2-api';

auth.login('classic', 'sxagondev').then((r) => console.log("output", r));
user.getUser().then((r) => console.log("output", r));
```

## IMPORTANT

This library is a ~complete "backend" for MineStoreCMS v3 theme/frontend. It already stores the authorization
token and all important data in cookies itself. So there is no need to solve anything, as the library will do 80% of the
work for you. All you have to do is design and develop the frontend design.

**Docs**: (todo)

## License

MIT © [Michal "Sxagon" Lipka](https://github.com/sxagon/mscms2-api)