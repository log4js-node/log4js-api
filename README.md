# Log4js - API

This library is intended for use by other library makers that want to include support for [log4js](https://github.com/nomiddlename/log4js-node) in their libraries without requiring a dependency on a specific version of log4js. It is intended that this library should remain static, and will work with any version of log4js. If no version of log4js can be found, then the library simply does not output anything.

## Installation

```
npm install @log4js-node/log4js-api
```

## Usage

Use as you would log4js - only without configuring it, it would be your library's clients that are responsible for configuring log4js (if they want to). The API is limited to only `getLogger` on the log4js object, and returns a Logger object that only supports the basic log functions (trace, debug, info, warn, error, fatal). If log4js is found in the require path, then the real log4js Logger object is returned.

```javascript
const log4js = require('@log4js-node/log4js-api');
const logger = log4js.getLogger('my-library');

logger.info("Library starting up");
```
