<p align="center">
  <h3 align="center">Starter with Vite 4 + Vue 3 + TailwindCSS</h3>
  <p align="center">
    Start a new project really fast with great defaults. 🚀
    <br>
  </p>
</p>

## Features

- [x] Setup with Vite 4
- [x] Setup with Vue 3
- [x] Setup with TailwindCSS and JIT
- [x] Setup with Typescript
- [x] Setup with ESlint and Prettier
- [x] Setup testing with @web/test-runner and Playwright
- [x] Setup Github Workflows for CI and release


## Development

1. Install dependencies
```sh
npm install
```

2. Run the project in development mode
```
npm run dev
```


## Run tests

Run unit tests
```sh
npm run test
```


## Build for production

Build production mode
```
npm run build
```


## Recommended IDE Setup

[VSCode](https://code.visualstudio.com/) + [Vetur](https://marketplace.visualstudio.com/items?itemName=octref.vetur). Make sure to enable `vetur.experimental.templateInterpolationService` in settings!

> **If Using `<script setup>`**
> 
> [`<script setup>`](https://github.com/vuejs/rfcs/pull/227) is a feature that is currently in RFC stage. To get proper IDE support for the syntax, use [Volar](https://marketplace.visualstudio.com/items?itemName=johnsoncodehk.volar) instead of Vetur (and disable Vetur).


## Type Support For `.vue` Imports in TS

Since TypeScript cannot handle type information for `.vue` imports, they are shimmed to be a generic Vue component type by default. In most cases this is fine if you don't really care about component prop types outside of templates. However, if you wish to get actual prop types in `.vue` imports (for example to get props validation when using manual `h(...)` calls), you can use the following:

### If Using Volar

Run `Volar: Switch TS Plugin on/off` from VSCode command palette.

### If Using Vetur

1. Install and add `@vuedx/typescript-plugin-vue` to the [plugins section](https://www.typescriptlang.org/tsconfig#plugins) in `tsconfig.json`
2. Delete `src/shims-vue.d.ts` as it is no longer needed to provide module info to Typescript
3. Open `src/main.ts` in VSCode
4. Open the VSCode command palette
5. Search and run "Select TypeScript version" -> "Use workspace version"
