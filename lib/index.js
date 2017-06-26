
class Logger {

  log() {}

  isLevelEnabled() {
    return false;
  }

  addContext() {}
  removeContext() {}
  clearContext() {}
}

[ 'Trace', 'Debug', 'Info', 'Warn', 'Error', 'Fatal', 'Mark' ].forEach((level) => {

  Logger.prototype[level.toLowerCase()] = () => {};
  Logger.prototype[`is${level}Enabled`] = () => false;

});

const checkForLog4js = () => {
  try {
    return require('log4js');
  } catch (e) {
    return null;
  }
};

const log4js = checkForLog4js();
const loggerFn =  log4js ? log4js.getLogger : () => new Logger();

module.exports = {
  getLogger: loggerFn
};
