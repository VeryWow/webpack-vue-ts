# webpack-vue-ts
> A simple and complete WebPack 4 boilerplate for Vue.js and TypeScript.

- [Setup](#setup)
- [Features](#features)

## Setup

**Basic setup**
```bash
## Clone the repo
git clone https://github.com/Raiondesu/webpack-vue-ts.git
cd webpack-vue-ts

## Rename the folder

## Edit package.json
```


**Build and test**
```bash
## Dev server with hot reload
npm run dev

## Launch production build
npm run build

## Run tests
npm test

## Launch SPA-oriented static server from ./dist
npm run server

## Build & Launch a server
npm run start
```

## Features

### WebPack 4 works out of the box
  - Development server with hot reload
  - Production build with minification
  - Separated and clusterized configs in the `./config` folder for easy fine-tuning
  - Builds are faster than ever
### TypeScript compilation driven by [ts-node](https://npmjs.com/ts-node)
  - Evrything is typed (even the configs!)
  - Faster TS compilation times
  - Free from ts-loader bugs
  - Global import aliases in `tsconfig.json` (automatically parsed by webpack)
### Vue.js with all the nessecities
  - Vue 2.5+
  - Vue-Router
  - Prepared store folder
  - Scss & Pug out of the box
  - A more flexible scheme than Nuxt.js
  - A prepared folder for hand-written plugins
  - Vue shorthands for `process.env.NODE_ENV` - `$isDevelopment` and `$environment`
