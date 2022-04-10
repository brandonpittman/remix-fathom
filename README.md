# remix-fathom

This package exports the following hooks:

- `useFathom(id, opts)`
- `useGoal(code, cents)`

## Setup

```sh
npm install remix-fathom fathom-client
```

`fathom-client` is a peer dependency.

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
