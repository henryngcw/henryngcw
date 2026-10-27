# Packages Version Changelog — October 2026

Legend: `<ACCEPT>` bumped · `<DOWNGRADE>` downgraded · `<NEW>` added · `<REMOVE>` removed · `<REJECT>` evaluated, not taken · `<IGNORE>` intentionally skipped

All versions are pinned exact (`.npmrc` → `save-exact=true`).

## ❗Latest Notes❗

### Platform

- `typescript@7` (Go port) is type-checked by `next build` through the local `tsc` CLI (Next 16.3+). Next's TS plugin diagnostics are not reported in CLI checks ([vercel/next.js#97229](https://github.com/vercel/next.js/issues/97229)).
- `@types/node@26` is ahead of the Node runtime (local v22.20.0). Types may allow Node APIs that don't exist at runtime — pin to the runtime's major if that bites.
- `@typescript/native-preview` (`tsgo`, used by `pnpm compile`) is now redundant with `typescript@7`; candidate for removal (`compile` → `tsc --noEmit`).

## CHANGELOG

<!-- MARK: 27 Oct -->

### 27-10-2026

#### Platform

| Package                               | From                 | To                   | Diff                                                                                               | Description                                                                                             |
| ------------------------------------- | -------------------- | -------------------- | -------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| `<ACCEPT>` next                       | 16.2.9               | 16.4.3               | [view](https://npmdiff.dev/next/16.2.9/16.4.3)                                                     | Routine maintenance — pick up upstream bug/security fixes; Next 16.4 also aligns with @next/mdx 16.4.3. |
| `<ACCEPT>` react                      | 19.2.4               | 19.3.1               | [view](https://npmdiff.dev/react/19.2.4/19.3.1)                                                    | Routine maintenance — pick up upstream bug/security fixes. Bumped with react-dom.                       |
| `<ACCEPT>` react-dom                  | 19.2.4               | 19.3.1               | [view](https://npmdiff.dev/react-dom/19.2.4/19.3.1)                                                | Routine maintenance — pick up upstream bug/security fixes. Bumped with react.                           |
| `<ACCEPT>` typescript                 | 5.9.3                | 7.0.2                | [view](https://npmdiff.dev/typescript/5.9.3/7.0.2)                                                 | Routine maintenance — major; native TS 7, supported by Next 16.3+ build type-check.                     |
| `<ACCEPT>` @typescript/native-preview | 7.0.0-dev.20260618.1 | 7.0.0-dev.20260707.2 | [view](https://npmdiff.dev/@typescript%2Fnative-preview/7.0.0-dev.20260618.1/7.0.0-dev.20260707.2) | Routine maintenance — pick up upstream bug/security fixes.                                              |
| `<ACCEPT>` @types/node                | 20.19.43             | 26.6.5               | [view](https://npmdiff.dev/@types%2Fnode/20.19.43/26.6.5)                                          | Routine maintenance — major; ahead of Node runtime (v22), see Latest Notes.                             |
| `<ACCEPT>` @types/react               | 19.2.17              | 19.3.0               | [view](https://npmdiff.dev/@types%2Freact/19.2.17/19.3.0)                                          | Routine maintenance — match React 19.3.                                                                 |
| `<ACCEPT>` @types/react-dom           | 19.2.3               | 19.3.0               | [view](https://npmdiff.dev/@types%2Freact-dom/19.2.3/19.3.0)                                       | Routine maintenance — match React 19.3.                                                                 |

#### UI

| Package                         | From   | To     | Diff                                                           | Description                                                |
| ------------------------------- | ------ | ------ | -------------------------------------------------------------- | ---------------------------------------------------------- |
| `<ACCEPT>` @base-ui/react       | 1.6.0  | 1.9.0  | [view](https://npmdiff.dev/@base-ui%2Freact/1.6.0/1.9.0)       | Routine maintenance — pick up upstream bug/security fixes. |
| `<ACCEPT>` lucide-react         | 1.21.0 | 1.62.0 | [view](https://npmdiff.dev/lucide-react/1.21.0/1.62.0)         | Routine maintenance — pick up upstream bug/security fixes. |
| `<ACCEPT>` shadcn               | 4.11.0 | 4.23.0 | [view](https://npmdiff.dev/shadcn/4.11.0/4.23.0)               | Routine maintenance — pick up upstream bug/security fixes. |
| `<ACCEPT>` tailwind-merge       | 3.6.0  | 3.7.0  | [view](https://npmdiff.dev/tailwind-merge/3.6.0/3.7.0)         | Routine maintenance — pick up upstream bug/security fixes. |
| `<ACCEPT>` tailwindcss          | 4.3.1  | 4.3.3  | [view](https://npmdiff.dev/tailwindcss/4.3.1/4.3.3)            | Routine maintenance — pick up upstream bug/security fixes. |
| `<ACCEPT>` @tailwindcss/postcss | 4.3.1  | 4.3.3  | [view](https://npmdiff.dev/@tailwindcss%2Fpostcss/4.3.1/4.3.3) | Routine maintenance — pick up upstream bug/security fixes. |
| `<ACCEPT>` zustand              | 5.0.14 | 5.0.16 | [view](https://npmdiff.dev/zustand/5.0.14/5.0.16)              | Routine maintenance — pick up upstream bug/security fixes. |

#### Blog

| Package                         | From | To     | Diff | Description                                     |
| ------------------------------- | ---- | ------ | ---- | ----------------------------------------------- |
| `<NEW>` @next/mdx               | -    | 16.4.3 | -    | Blog: render MDX posts from `src/content/blog`. |
| `<NEW>` @mdx-js/loader          | -    | 3.1.1  | -    | Blog: MDX loader required by @next/mdx.         |
| `<NEW>` @mdx-js/react           | -    | 3.1.1  | -    | Blog: MDX React provider required by @next/mdx. |
| `<NEW>` @types/mdx              | -    | 2.0.14 | -    | Blog: types for `.mdx` imports.                 |
| `<NEW>` @tailwindcss/typography | -    | 0.5.20 | -    | Blog: `prose` styling for post content.         |

#### Tooling

| Package                | From   | To     | Diff                                                  | Description                                                |
| ---------------------- | ------ | ------ | ----------------------------------------------------- | ---------------------------------------------------------- |
| `<ACCEPT>` lint-staged | 17.0.7 | 17.6.0 | [view](https://npmdiff.dev/lint-staged/17.0.7/17.6.0) | Routine maintenance — pick up upstream bug/security fixes. |
| `<ACCEPT>` oxlint      | 1.70.0 | 1.89.0 | [view](https://npmdiff.dev/oxlint/1.70.0/1.89.0)      | Routine maintenance — pick up upstream bug/security fixes. |
| `<ACCEPT>` oxfmt       | 0.55.0 | 0.74.0 | [view](https://npmdiff.dev/oxfmt/0.55.0/0.74.0)       | Routine maintenance — pick up upstream bug/security fixes. |
