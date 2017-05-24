# generic-ico

[![Build Status](https://travis-ci.org/Neufund/generic-ico.svg)](https://travis-ci.org/Neufund/generic-ico)  [![codecov](https://codecov.io/gh/Neufund/generic-ico/branch/master/graph/badge.svg)](https://codecov.io/gh/Neufund/generic-ico) [![Greenkeeper badge](https://badges.greenkeeper.io/Neufund/generic-ico.svg)](https://greenkeeper.io/)

Generic Neufund ICO-UI application.


## Getting started

### Setting up your development environment

I recommend and Ubuntu machine with Chrome and Atom. You can use whatever you want.

Install [Chrome][chrome] and the extensions [React Developer Tools][react-ext] and [Redux DecTools][redux-ext].

[chrome]: https://www.google.com/chrome/browser/features.html?brand=CHBD&gclid=CO2x8Ibw5NMCFYoQ0wodulgAlQ&dclid=CO7Tmofw5NMCFUakUQodVc8BvA
[react-ext]: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
[redux-ext]: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

Install [Atom][atom] and run the command bellow to install a bunch of packages. Afterwards, configure the eslint plugin to ‘fix on save’.

```
apm install editorconfig file-icons language-diff language-ini language-markdown linter linter-eslint linter-solidity linter-write-good minimap minimap-git-diff minimap-highlight-selected
```

[atom]: https://atom.io/

### Getting up and running

Open the project folder in Atom. Then in a terminal, download all the dependencies:

```
yarn
```

Now open four terminals:

A: `yarn testrpc`
B: `yarn serve`
C: `yarn test-watch`
D: (use for issuing random commands like `git`)

Open Chrome and go to [https://localhost:8080/](https://localhost:8080/).
