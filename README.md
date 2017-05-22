# dapp-starter-kit

[![Build Status](https://travis-ci.org/Neufund/dapp-starter-kit.svg)](https://travis-ci.org/Neufund/dapp-starter-kit)  [![codecov](https://codecov.io/gh/Neufund/dapp-starter-kit/branch/master/graph/badge.svg)](https://codecov.io/gh/Neufund/dapp-starter-kit) [![Greenkeeper badge](https://badges.greenkeeper.io/Neufund/dapp-starter-kit.svg)](https://greenkeeper.io/) [![Join the chat at https://gitter.im/Neufund/dapp-starter-kit](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Neufund/dapp-starter-kit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Starter kit for Node + React + Redux + Web3 applications.


## Getting started

### Setting up your development environment

I recommend and Ubuntu machine with Chrome and Atom. You can use whatever you want.

Install [Chrome][chrome] and the extensions [React Developer Tools][react-ext] and [Redux DecTools][redux-ext].

[chrome]: https://www.google.com/chrome/browser/features.html?brand=CHBD&gclid=CO2x8Ibw5NMCFYoQ0wodulgAlQ&dclid=CO7Tmofw5NMCFUakUQodVc8BvA
[react-ext]: https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en
[redux-ext]: https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en

#### Atom
Install [Atom][atom] and run the command bellow to install a bunch of packages. Afterwards, configure the eslint plugin to ‘fix on save’.

```
apm install editorconfig file-icons language-diff language-ini language-markdown linter linter-eslint linter-solidity linter-write-good minimap minimap-git-diff minimap-highlight-selected
```

[atom]: https://atom.io/

#### Webstorm
Enable editorconfig plugin - [JetBrains manual](https://www.jetbrains.com/help/webstorm/2017.1/configuring-code-style.html#editorconfig)  
Enable ESLint plugin - [JetBrains manual](https://www.jetbrains.com/help/webstorm/2017.1/eslint.html)  
Note that at this time (WebStorm 2017.1.3) you cannot set formatting rules to use one's from ```.eslintrc.json```
([issue](https://youtrack.jetbrains.com/issue/WEB-19350)). So you cannot use "Reformat Code" function but you can use plugin
integration. If you see ESLint error you can hit "alt-enter" and choose "ESLint: fix current file". Another option would be to manually edit IDE's javascript codestyle settings.       

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
