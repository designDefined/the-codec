# Tree Shaking

## Import Test

- Import methods(whether `mono-repo` or `typescript path alias`) has no impact on tree shaking.
- Typescript path alias affords better auto-import intellisense and shorter prefix.
- To hoist installed packages, versions of target package's peer-dependencies should match exactly.

## Lodash Tree Shaking Test

- Use `lodash-es`.
- Use `import { debounce } from "lodash-es"` or `import * as _ from "lodash-es"`

```ts
// No import

// dist/index.html                  0.39 kB │ gzip:  0.27 kB
// dist/assets/index-BHlo9x9v.js  148.73 kB │ gzip: 47.94 kB
```

```ts
import _ from "lodash";

// dist/index.html 0.39 kB │ gzip: 0.27 kB
// dist/assets/index-BArLNFMK.js 222.26 kB │ gzip: 75.11 kB
```

```ts
import * as _ from "lodash";

// dist/index.html 0.39 kB │ gzip: 0.27 kB
// dist/assets/index-Cyhxas6W.js 222.15 kB │ gzip: 75.05 kB
```

```ts
import debounce from "lodash/debounce";

// dist/index.html 0.39 kB │ gzip: 0.27 kB
// dist/assets/index-Dg31FMNd.js 152.27 kB │ gzip: 49.47 kB
```

```ts
import { debounce } from "lodash-es";

// dist/index.html 0.39 kB │ gzip: 0.27 kB
// dist/assets/index-CI2D7Uai.js 151.12 kB │ gzip: 48.99 kB
```

```ts
import * as _ from "lodash-es";

// dist/index.html                  0.39 kB │ gzip:  0.27 kB
// dist/assets/index-CI2D7Uai.js  151.12 kB │ gzip: 48.99 kB
```

## Ramda Tree Shaking Test

- Just use any named import.

```ts
// No import

// dist/index.html                  0.39 kB │ gzip:  0.27 kB
// dist/assets/index-BHlo9x9v.js  148.73 kB │ gzip: 47.94 kB
```

```ts
import { map } from "ramda";

// dist/index.html                  0.39 kB │ gzip:  0.27 kB
// dist/assets/index-npiME5uE.js  152.68 kB │ gzip: 49.19 kB
```

```ts
import map from "ramda/es/map";

// dist/index.html                  0.39 kB │ gzip:  0.27 kB
// dist/assets/index-DiH401l7.js  152.68 kB │ gzip: 49.20 kB
```

```ts
import * as R from "ramda";

// dist/index.html                  0.39 kB │ gzip:  0.27 kB
// dist/assets/index-DiH401l7.js  152.68 kB │ gzip: 49.20 kB
```
