'use strict'

/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  /**
   * Array of application names.
   */
  app_name: ['bolt-frontend'],
  /**
   * Your New Relic license key.
   */
  license_key: '**LICENSE KEY HERE**',
  proxy_host : 'proxy',
  proxy_port : '3128',
  logging : {
    level:'info',
    filepath: '/var/log/bolt-2dot0-frontend/newrelic.log'
  }
}
