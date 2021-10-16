# Tealeaf

[![lerna](https://img.shields.io/badge/maintained%20with-lerna-cc00ff.svg)](https://lerna.js.org/)

<img align="center" src="https://github.com/Phl3bas/Tealeaf/blob/main/assets/tealeaf-primary.svg" alt="tealeaf logo"/>

<p align="center">A Beautifully modular UI Tool Kit</p>

---

## What is Tealeaf?

Tealeaf is a modular UI tool kit which provides the user with, a design system, a classless css framework and reset, an atomic css framework and a web component library. The aim of Tealeaf is to provide a multi tierd UI kit, where developers can "buy-in" to as much of the system as they like, without feeling like alot of the design system/framework is going to waste.

## What packages are available?

Tealeaf is broken down into four distinct packages.

### @tealeaf/tokens

- A curated set of design tokens declared at root level

### @tealeaf/elements

- A css normalisation and opinionated classless css framework

### @tealeaf/css

- A utility based css framework

### @tealeaf/components

- A flexible web component library (not yet released in beta)

---

### running this project for development

`git clone https://github.com/Phl3bas/Tealeaf.git`

`npm install`

`npm run tealeaf:init`

### build this project

in root dir

`npm run build:tokens`

`npm run build:elements`

`npm run build:css`


## Disclaimer!!

Tealeaf and its packages are currently in developement and does not have a stable (1.x.x) release yet, because of this the api for the packages may be volatile between versions, it is encouraged to only to use the beta versions in non-production grade projects until a stable release has been announced! The current versions are available on npm/unpkg if you wish to use them!

```bash
npm install @tealeaf/tokens @tealeaf/elements @tealeaf/css
```

