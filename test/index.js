const test = require('tap').test;
const sandbox = require('sandboxed-module');

test('../lib/index.js', (batch) => {

  batch.test('should provide a getLogger function', (t) => {
    const log4js = require('../lib');

    t.isA(log4js.getLogger, 'function');
    t.end();
  });

  batch.test('when log4js is not available', (t) => {
    const log4js = require('../lib');
    const logger = log4js.getLogger();

    t.test('logger should provide dummy functions for context', (assert) => {
      assert.isA(logger.addContext, 'function');
      assert.doesNotThrow(() => { logger.addContext('cheese', 'biscuits'); });
      assert.isA(logger.removeContext, 'function');
      assert.doesNotThrow(() => { logger.removeContext('cheese'); });
      assert.isA(logger.clearContext, 'function');
      assert.doesNotThrow(() => { logger.clearContext(); });
      assert.end();
    });

    t.test('logger should always say that log levels are not enabled', (assert) => {
      ['Trace','Debug','Info','Warn','Error','Fatal'].forEach((level) => {
        assert.false(logger.isLevelEnabled(level));
        assert.false(logger[`is${level}Enabled`]());
      });
      assert.end();
    });

    t.test('logger should provide logging functions', (assert) => {
      assert.isA(logger.log, 'function');
      assert.doesNotThrow(() => {
        logger.log('some','dummy','arguments');
      });
      ['trace','debug','info','warn','error', 'fatal'].forEach((level) => {
        assert.isA(logger[level], 'function');
        assert.doesNotThrow(() => {
          logger[level]('some','dummy','arguments');
        });
      });
      assert.end();
    });

    t.end();
  });

  batch.test('when log4js is available', (t) => {
    const log4js = sandbox.require('../lib', {
      requires: {
        log4js: {
          getLogger: () => 'cheese'
        }
      },
      singleOnly: true
    });
    const logger = log4js.getLogger();

    t.equal(logger, 'cheese');
    t.end();
  });

  batch.end();
});
