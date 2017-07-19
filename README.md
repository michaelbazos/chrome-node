# chrome-node

[![npm](https://img.shields.io/npm/v/chrome-node.svg?style=flat-square)]()

Programmatically control Chrome browser.

## Getting started

### Installation

```sh
npm i chrome-node
```

### Example

```js
const chrome = require('chrome-node');

await chrome.start();

await chrome.navigate('https://www.google.com');
```

## References

 - [API for parsing and serializing DOM (W3C)](https://w3c.github.io/DOM-Parsing/#apis-for-parsing-and-serializing-dom)
 - [Chrome Remote Interface](https://github.com/cyrus-and/chrome-remote-interface)
 - [Chrome Devtools Protocol](https://chromedevtools.github.io/devtools-protocol)
