# konferencia-web-2020

The official web page of the XVII. Simonyi Konferencia

[![Netlify Status](https://api.netlify.com/api/v1/badges/0846b2e0-eb9c-4169-afe8-f7e6550f0a05/deploy-status)](https://app.netlify.com/sites/simonyi-konf-2020/deploys)

## 🚀 Getting started

- Recommended editor is Visual Studio Code
- Install Node 12 and Yarn v1
- Install Gatsby CLI `yarn global add gatsby-cli`
- Clone the repo with git or Github Desktop
- Add all recommended addons to VSCode
- Install dependencies with `yarn install`
  - Restart VSCode if it still doesn't recognize the installed node modules
- Start a development server with `yarn develop` (`gatsby develop`)
  - _Other scripts like `build`, [`format`](#automatic-code-formatting), [`type-check`](#static-type-checking) and [`lint`](#linting) are also available_

## ✨ Developer experience

- After someone introduces a new dependency you need to run `yarn` after pull, to add said dependency.
- If you want to add a new dependency, it needs to have types: https://microsoft.github.io/TypeSearch/
  - Alternatively you can add a new line to the `decalrations.d.ts` file: `declare module "name-of-package"`

### Automatic code formatting

[Prettier][] aims to provide codebase consistency when multiple developers work on the same project. The main reason behind adopting it is to [stop all the on-going debates over coding styles][].

[prettier]: https://prettier.io/
[stop all the on-going debates over coding styles]: https://prettier.io/docs/en/why-prettier.html

### Static type checking

[TypeScript][] adds optional types to JavaScript, preventing several programming mistakes. For a quick guide about using React with it, please refer to the [React TypeScript Cheatsheet][].

[typescript]: https://www.typescriptlang.org/
[react typescript cheatsheet]: https://github.com/sw-yx/react-typescript-cheatsheet

### Linting

Source code is linted by [ESLint][], enforcing the [Airbnb JavaScript Style Guide][] through an overridable set of rules provided by [eslint-config-airbnb][].

[eslint]: https://eslint.org/
[airbnb javascript style guide]: https://github.com/airbnb/javascript
[eslint-config-airbnb]: https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb

## Some reads

### Chakra UI

- https://chakra-ui.com/style-props
- https://chakra-ui.com/box

### Parallax

- https://keithclark.co.uk/articles/pure-css-parallax-websites/
- https://keithclark.co.uk/articles/practical-css-parallax/
