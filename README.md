# prerender-useragent-forwarding [![npm version](https://badge.fury.io/js/prerender-useragent-forwarding.svg)](https://badge.fury.io/js/prerender-useragent-forwarding)
A plugin for [Prerender](https://github.com/prerender/prerender) server for forwarding http User-Agent header instead of masking it FantomJS.

## Usecase
Install with NPM
```
npm install prerender-useragent-forwarding --save
```

Add this to prerender_folder/server.js:
```
server.use(require('prerender-useragent-forwarding'));
```
