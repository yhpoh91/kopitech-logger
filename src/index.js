require('dotenv').config();
const { configure, getLogger } = require('log4js');

const logEnabled = (process.env.LOGGING_ENABLED || 'true').toLowerCase() === 'true';
const logLevel = process.env.LOGGING_LEVEL || 'info';

const appenders = {};

if (logEnabled) {
  appenders.out = {
    type: 'stdout',
    layout: {
      type: 'pattern',
      pattern: '%[%d{ISO8601} [%p]%] %c [%f{2}:%l] %m',
    },
  };
}

const logConfig = {
  appenders,
  categories: {
    default: {
      appenders: Object.keys(appenders),
      level: logLevel,
      enableCallStack: true,
    },
  },
};

const buildLog = (logger) => {
  if (!logEnabled) {
    return {
      L: {
        debug: () => {},
        info: () => {},
        warn: () => {},
        error: () => {},
      },
    };
  }

  configure(logConfig);
  return {
    L: getLogger(logger),
  };
};

module.exports = buildLog;

