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

#### Atom
Install [Atom][atom] and run the command bellow to install a bunch of packages. Afterwards, configure the eslint plugin to ‘fix on save’.

```
apm install editorconfig file-icons language-diff language-ini language-markdown linter linter-eslint linter-solidity linter-sass-lint linter-write-good minimap minimap-git-diff minimap-highlight-selected
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

#### Possible `node-sass` issues

For some node / npm versions there is slight problem with `node-sass`. You need to recompile it for your node version after issuing `yarn`. 
```
npm rebuild node-sass
```

Now open a terminal and start:

```
yarn serve
```

Open Chrome and go to [https://localhost:8080/](https://localhost:8080/).


To interact with a mock blockchain, you need to start TestRPC:

```
yarn testrpc
```

To authenticate your session, you need [`signatue-authentication-server`](https://hub.docker.com/r/neufund/signature-authentication-server/)

```
openssl ecparam -genkey -name secp521r1 -noout -out ec512.prv.pem
openssl ec -in ec512.prv.pem -pubout > ec512.pub.pem
docker run -ti -v $(pwd)/ec512.prv.pem:/srv/ec512.prv.pem:ro -v $(pwd)/ec512.pub.pem:/srv/ec512.pub.pem:ro -p 5000:5000 neufund/signature-authentication-server:latest
```
