<p align="center">
  <h3 align="center">Starter with Vite 4 + Vue 3 + TailwindCSS</h3>
  <p align="center">
    Start a new project really fast with great defaults. 🚀
    <br>
  </p>
</p>

## Features

- [x] Setup with Vite 5
- [x] Setup with Vue 3
- [x] Setup with TailwindCSS 3
- [x] Setup with Typescript
- [x] Setup with ESlint and Prettier
- [x] Setup testing with Vitest
- [x] Setup testing with Playwright
- [x] Setup Github Workflows for CI and Release
- [x] Dockerize for static site


## Development

1. Install dependencies
```sh
pnpm install
```

2. Run the project in development mode
```
pnpm run dev
```


## Run tests

Run unit tests
```sh
pnpm run test:unit
```

Run e2e tests
```sh
pnpm run test:e2e
```

## Build for production

Build production mode
```
pnpm run build
```


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar)


## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### Using VSCode + Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.
