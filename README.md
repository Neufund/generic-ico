# node-starter-kit

[![Build Status](https://travis-ci.org/Recmo/node-starter-kit.svg)](https://travis-ci.org/Recmo/node-starter-kit)  [![codecov](https://codecov.io/gh/Recmo/node-starter-kit/branch/master/graph/badge.svg)](https://codecov.io/gh/Recmo/node-starter-kit) [![Join the chat at https://gitter.im/Recmo/node-starter-kit](https://badges.gitter.im/Join%20Chat.svg)](https://gitter.im/Recmo/node-starter-kit?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

Starter kit for Node applications.


## Getting started

### Setting up your development environment

I recommend and Ubuntu machine with Atom. You can use whatever you want.

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

Now open two terminals:

A: `yarn test-watch`
B: (use for issuing random commands like `git`)
