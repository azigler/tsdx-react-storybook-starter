![](https://user-images.githubusercontent.com/7295363/189551806-b90545fe-73df-4c1b-9224-6abd11036f38.png)

# tsdx-react-storybook-starter

> [TSDX](https://tsdx.io/) with an opinionated setup for [React](https://reactjs.org/) and [Storybook](https://storybook.js.org/)

[![License](https://img.shields.io/badge/license-MIT-EEE.svg?style=popout-square)](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/LICENSE.md)
[![Contributing Guide](https://img.shields.io/badge/contributing-guide-EEE.svg?style=popout-square)](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/.github/CONTRIBUTING.md)
[![Code of Conduct](https://img.shields.io/badge/contributor-covenant-EEE.svg?style=popout-square)](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/.github/CODE_OF_CONDUCT.md)
[![Security Policy](https://img.shields.io/badge/security-policy-EEE.svg?style=popout-square)](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/.github/SECURITY.md)

[![Statements](https://img.shields.io/badge/statements-100%25-brightgreen.svg?style=flat&logo=jest)](https://azigler.github.io/tsdx-react-storybook-starter/coverage/)
[![Branches](https://img.shields.io/badge/branches-100%25-brightgreen.svg?style=flat&logo=jest)](https://azigler.github.io/tsdx-react-storybook-starter/coverage/)
[![Functions](https://img.shields.io/badge/functions-100%25-brightgreen.svg?style=flat&logo=jest)](https://azigler.github.io/tsdx-react-storybook-starter/coverage/)
[![Lines](https://img.shields.io/badge/lines-100%25-brightgreen.svg?style=flat&logo=jest)](https://azigler.github.io/tsdx-react-storybook-starter/coverage/)

[![Storybook](https://github.com/storybookjs/brand/raw/main/badge/badge-storybook.svg)](https://azigler.github.io/tsdx-react-storybook-starter/storybook)

# Table of Contents

  - [Background](#background)
  - [Install](#install)
  - [Usage](#usage)
    - [Scripts](#scripts)
    - [TSDX](#tsdx)
    - [Storybook](#storybook)
    - [Example](#example)
      - [Scripts](#scripts-1)
    - [Tips](#tips)
  - [Maintainers](#maintainers)
  - [Contributing](#contributing)
  - [License](#license)

## Background

**This is an opinionated setup for creating a component library.** If you’re looking to build a user-facing React app, you should use a tool like [`create-react-app`](https://create-react-app.dev/), [`razzle`](https://razzlejs.org/), [`nextjs`](https://nextjs.org/), [`gatsby`](https://www.gatsbyjs.com/), or [`react-static`](https://github.com/react-static/react-static) instead.  This [GitHub template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository) repository is a [TSDX project generated with React and Storybook](https://github.com/jaredpalmer/tsdx/tree/master/templates/react-with-storybook). Configurations have been made to simplify building, testing, and publishing [TypeScript](https://www.typescriptlang.org) component libraries to [npm](https://www.npmjs.com/). This project uses the following:

- [Yarn](https://yarnpkg.com/)
- [GitHub Actions](https://docs.github.com/en/actions)
  - `ci`: Continuous integration (linting, testing, and building) on push
  - `deploy`: Deploy Storybook, [`/example`](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/example), and Jest test coverage to [GitHub Pages](https://pages.github.com/) with [jamesives/github-pages-deploy-action@v4](https://github.com/JamesIves/github-pages-deploy-action)
  - `pull_request`: [andresz1/size-limit-action](https://github.com/andresz1/size-limit-action) and [artiomtr/jest-coverage-report-action](https://github.com/ArtiomTr/jest-coverage-report-action) on pull requests
- [TSDX](https://tsdx.io/)
  - [React](https://reactjs.org/) (v18)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Parcel](https://parceljs.org/) ([`/example` directory](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/example))
    - `$react-dom` alias for hot reloading
  - [Rollup](https://rollupjs.org/guide/en/)
    - CJS/ESM/UMD/[SystemJS](https://github.com/systemjs/systemjs)
    - [@svgr/rollup](https://www.npmjs.com/package/@svgr/rollup)
      - SVG components/URLs
    - [rollup-plugin-postcss](https://www.npmjs.com/package/rollup-plugin-postcss)
      - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)/[LESS](https://lesscss.org/)/[SASS](https://sass-lang.com/)/[PostCSS](https://postcss.org/)/[Stylus](https://stylus-lang.com/)
      - [CSS Modules](https://github.com/css-modules/css-modules)
    - [@rollup/plugin-image](https://www.npmjs.com/package/@rollup/plugin-image)
      - GIF/JPG/PNG/WEBP
    - [@rollup/plugin-replace](https://www.npmjs.com/package/@rollup/plugin-replace)
  - [Husky](https://typicode.github.io/husky/#/)
    - `pre-commit`: `yarn prepare`
  - [ESLint](https://eslint.org/)
  - [Prettier](https://prettier.io/)
  - [ai/size-limit](https://github.com/ai/size-limit)
  - [Jest](https://jestjs.io/)
    - [eddyerburgh/jest-transform-stub](https://github.com/eddyerburgh/jest-transform-stub)
    - [@testing-library/react](https://github.com/testing-library/react-testing-library)
    - [olavoparno/istanbul-badges-readme](https://github.com/olavoparno/istanbul-badges-readme)
    - Coverage
    - Snapshots
  - [Storybook](https://storybook.js.org/) (v6)
    - [styleguidist/react-docgen-typescript](https://github.com/styleguidist/react-docgen-typescript)
    - [@storybook/addon-jest](https://storybook.js.org/addons/@storybook/addon-jest)
    - [@storybook/addon-design-assets](https://storybook.js.org/addons/@storybook/addon-design-assets)
    - [@storybook/addon-a11y](https://storybook.js.org/addons/@storybook/addon-a11y)
    - [@storybook/addon-links](https://storybook.js.org/addons/@storybook/addon-links)
    - [@storybook/addon-storysource](https://storybook.js.org/addons/@storybook/addon-storysource/)
    - [@storybook/addon-essentials](https://storybook.js.org/docs/react/essentials/introduction)
      - [Docs](https://storybook.js.org/addons/@storybook/addon-docs)
        - [MDX](https://mdxjs.com/)
      - [Controls](https://storybook.js.org/addons/@storybook/addon-controls)
      - [Actions](https://storybook.js.org/addons/@storybook/addon-actions)
      - [Viewport](https://storybook.js.org/addons/@storybook/addon-viewport)
      - [Backgrounds](https://storybook.js.org/addons/@storybook/addon-backgrounds)
      - [Toolbars](https://storybook.js.org/addons/@storybook/addon-toolbars)
      - [Measure](https://storybook.js.org/addons/@storybook/addon-measure)
      - [Outline](https://storybook.js.org/addons/@storybook/addon-outline)
    - [Webpack](https://webpack.js.org/) (v5)
      - [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)/[LESS](https://lesscss.org/)/[SASS](https://sass-lang.com/)/[PostCSS](https://postcss.org/)/[Stylus](https://stylus-lang.com/)
        - [plugin-packs/postcss-preset-env](https://github.com/csstools/postcss-plugins/tree/main/plugin-packs/postcss-preset-env)
        - [postcss/postcss-nested](https://github.com/postcss/postcss-nested)
      - [CSS Modules](https://github.com/css-modules/css-modules)
      - GIF/JPG/PNG/WEBP
      - [@svgr/webpack](https://www.npmjs.com/package/@svgr/webpack)
        - SVG components/URLs

## Install

This repository should be used as a [GitHub template](https://docs.github.com/en/repositories/creating-and-managing-repositories/creating-a-template-repository). Instead of cloning or forking, you should create your own repository via the [Use this template](https://github.com/azigler/tsdx-react-storybook-starter/generate) button or the [GitHub CLI](https://cli.github.com/) with the following command:

```bash
gh repo create YOUR_PROJECT_NAME --clone --template azigler/tsdx-react-storybook-starter
```

Once you have your repository initialized and cloned locally, install the necessary packages with the following command in the project directory:

```bash
yarn install
```

## Usage

### Scripts

You can append additional flags to the scripts when you call them. **These scripts have only been tested in [Yarn](https://yarnpkg.com/).**

- `badges`: Adds [badges](https://github.com/olavoparno/istanbul-badges-readme) to [`README.md`](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/README.md) for [Jest](https://jestjs.io/) tests
- `build`: Runs [`tsdx build`](https://tsdx.io/api-reference#code-tsdx-build-code) to build CommonJS, ESModules, Universal, and [SystemJS](https://github.com/systemjs/systemjs) module formats to the `/dist` directory
- `clean`: Cleans up caches, `/dist`, and `/storybook-static` here and in [`/example`](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/example)
- `deploy`: Runs the `test` and `build` scripts then builds and copies Storybook, [`/example`](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/example), and Jest test coverage to the `/deploy` directory
- `dev`: Runs [`tsdx watch`](https://tsdx.io/api-reference#code-tsdx-watch-code)
- `husky`: Initializes [Husky](https://typicode.github.io/husky/#/) using a `pre-commit` hook with `yarn husky:prepare`
- `husky:prepare`: Alias for `lint`, `build`, `test`, `size`, and `storybook:build` scripts
- `lint`: Runs [`tsdx lint`](https://tsdx.io/api-reference#code-tsdx-test-code) recursively in the [`/src`](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/src) directory with the [`--fix`](https://eslint.org/docs/latest/user-guide/command-line-interface#--fix) flag
- `size`: Runs [ai/size-limit](https://github.com/ai/size-limit) using `size-limit` configurations in [`package.json`](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/package.json)
- `start`: Alias for `dev` script
- `storybook`: Starts a Storybook server at [`http://localhost:6006`](http://localhost:6006)
- `storybook:build`: Builds Storybook to the `/storybook-static` directory
- `test`: Runs [Jest](https://jestjs.io/) tests recursively found in the [`/src`](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/src) directory to save results, coverage, and snapshots and then runs the `badges` script
- `test:ci`: Alias for `test` script when executed via [`ci`](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/.github/workflows/ci.yml) GitHub Action
- `test:watch`: Alias for `test` script that watches for changes

### TSDX

The recommended workflow is to use the following command:

```bash
yarn dev
```

This builds your project to the `/dist` directory and watches to rebuild automatically when any changes are made in the [`/src`](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/src) directory.

In another terminal, run either [Storybook](#storybook) or the [Parcel example](#example) and start making your changes with hot reloading.

To build your project for publishing, use the following command:

```bash
yarn prepare
```

CommonJS, ESModules, Universal, and SystemJS module formats are built by default. The appropriate paths are configured in `package.json` and `/dist/index.js` accordingly.

To learn more about the different scripts available, check out the [Scripts](#scripts) section.

### Storybook

To start a Storybook development server with hot reloading at [`http://localhost:6006`](http://localhost:6006), use the following command:

```bash
yarn storybook
```

This loads all stories recursively inside the [`/src`](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/src) directory.

Stories should reference the components as if using the library, similar to the example playground. This means importing from the root project directory, which aliases to the `/dist` directory.

To build Storybook as a static site to the `/storybook-static` directory, use the following command:

```bash
yarn storybook:build
```

To preview the Storybook for the [`main`](https://github.com/azigler/tsdx-react-storybook-starter/tree/main) branch of [`tsdx-react-storybook-starter`](https://github.com/azigler/tsdx-react-storybook-starter/tree/main), click the following badge:

[![Storybook](https://github.com/storybookjs/brand/raw/main/badge/badge-storybook.svg)](https://azigler.github.io/tsdx-react-storybook-starter/storybook)

### Example

To start a [Parcel development server](https://parceljs.org/features/development/) at [`http://localhost:1234`](http://localhost:1234) with hot reloading, use the following command in the [`/example`](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/example) directory:

```bash
yarn dev
```

The example will import whatever is in the `/dist` directory, so if you are seeing out-of-date components then make sure TSDX is running in another terminal via `yarn dev` [like recommended above](#tsdx).

To build the example to the `/example/dist` directory for production, use the following command in the [`/example`](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/example) directory:

```bash
yarn build
```

To preview the example in the [`main`](https://github.com/azigler/tsdx-react-storybook-starter/tree/main) branch of [`tsdx-react-storybook-starter`](https://github.com/azigler/tsdx-react-storybook-starter/tree/main), click [here](https://azigler.github.io/tsdx-react-storybook-starter/example).

#### Scripts

- `build`: Builds for [production](https://parceljs.org/features/production/) to the `/example/dist` directory
- `clean`: Cleans up caches and the `/example/dist` directory
- `dev`: Starts a [development server](https://parceljs.org/features/development/) at [`http://localhost:1234`](http://localhost:1234) with hot reloading
- `start`: Alias for `dev` script


### Tips

- If you’re new to TypeScript and React, make sure you read the [handbook](https://www.typescriptlang.org/docs/handbook/intro.html), then check out [sw-yx/react-typescript-cheatsheet](https://github.com/sw-yx/react-typescript-cheatsheet/).

- To get the most out of this repository, be sure to familiarize yourself with [TSDX](https://tsdx.io/).

- To maintain best practices, use [np](https://github.com/sindresorhus/np) when publishing to [npm](https://www.npmjs.com/).

- Per [Palmer Group guidelines](https://github.com/jaredpalmer/typescript), [always use named exports](https://github.com/palmerhq/typescript#exports). Code split inside your React app instead of your React library.


## Maintainers

[@azigler](https://github.com/azigler)

## Contributing

Feedback and contributions are encouraged! After reading the [Code of Conduct](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/.github/CODE_OF_CONDUCT.md), use the [Bug Report](https://github.com/azigler/tsdx-react-storybook-starter/issues/new?assignees=&labels=bug&template=bug-report.md&title=) and [Feature Request](https://github.com/azigler/tsdx-react-storybook-starter/issues/new?assignees=&labels=enhancement&template=feature-request.md&title=) issue templates to discuss any bugs or contributions to `tsdx-react-storybook-starter`. For more information, please read the [Contributing Guide](https://github.com/azigler/tsdx-react-storybook-starter/tree/main/.github/CONTRIBUTING.md).

## License

[MIT](./LICENSE.md) © Andrew Zigler
