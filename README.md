# remix-fathom

This package exports the following hooks:

- `useFathom(id, opts)`
- `useGoal(code, cents)`

## Setup

The following peer dependencies are required:

- `react`
- `fathom-client`
- `react-router-dom`

Remix has `react-router-dom` under the hood, but you may want to run

```sh
npm install fathom-client react-router-dom
```

…to make things clear (or you're using PNPM).

Then in `app/root.tsx`, add

```tsx
import { useFathom } from "remix-fathom";

useFathom("YOUR_SITE_ID", myOpts);
```

## useFathom

Supply your Fathom site ID and optional opts object to configure [fathom-client][]. While fathom-client is a peer dependency, the `useFathom` hook will set up loading and registering your tracked views each time the page changes.

## useGoal

This hook returns you a memoized function pre-populated with your provided code and cents.

---

Thanks to Sergio Xalambrí for the [inspiration][]!

[inspiration]: https://sergiodxa.com/articles/use-fathom-with-remix
[fathom-client]: https://www.npmjs.com/package/fathom-client

