/**
 * All results of any test using this this project need to have a
 * backlink to this project.
 *
 * Copyright (c) abcdan - All rights reserved.
 */

require('colors')
const settings = require('./sql/settings')

/**
 * Stable tests
 */
console.log('[INFO] Dataset size: '.yellow + settings.amount)
require('./tests/postgresql')
require('./tests/yugabyte')
require('./tests/mysql')

/**
 * Experimental
 */
// require('./tests/mariadb')
