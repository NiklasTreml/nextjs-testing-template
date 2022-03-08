# nextjs-template

## Features

- End-to-End testing with [cypress](https://github.com/cypress-io/cypress)

- Unit-testing with [jest](https://github.com/facebook/jest) and [react-testing-library](https://github.com/testing-library/react-testing-library)

- Linting with [eslint](https://github.com/eslint/eslint)

- [TypeScript](https://github.com/microsoft/TypeScript) enabled

- uses [yarn](https://github.com/yarnpkg/yarn) for package management, but can also be replaced by npm

## Scripts

The following describes all the scripts included with the template.

### dev

Starts a development server on https://localhost:3000 with hot reloading enabled.

`yarn run dev`

or

`npm run dev`

### build

Builds the project ready for production.

`yarn run build`

or

`npm run build`

### start

Runs the production project. **Must** run build before.

`yarn run start`

or

`npm run start`

### lint

Runs eslint with the provided config on the project. By default the standard NextJs config will be used.

`yarn run lint`

or

`npm run lint`

### cypress

Runs the cypress interactive test runner in a browser window. Useful for testing while developing.

`yarn run cypress`

or

`npm run cypress`

### cypress:headless

Runs cypress without starting a browser window. Can be used in CI environments.

`yarn run cypress:headless`

or

`npm run cypress:headless`

### e2e

Runs the project on the local system and then starts the interactive cypress runner.

`yarn run e2e`

or

`npm run e2e`

### e2e:headless

Runs the projet on the local system and then runs all cypress test-suites without opening an interactive session

`yarn run e2e:headless`

or

`npm run e2e:headless`

### test:watch

Runs jest in watch mode. This will rerun test suite on file changes

`yarn run test:watch`

or

`npm run test:watch`

### test

Runs jest test suites

`yarn run test`

or

`npm run test`
