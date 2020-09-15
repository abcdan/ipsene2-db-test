/**
 * All results of any test using this this project need to have a
 * backlink to this project.
 *
 * Copyright (c) abcdan - All rights reserved.
 */

console.log('[TESTING] MySQL'.blue)

const PreciseTimer = require('precise-timer')
const tests = require('../sql/tests')

const mysql = require('mysql2')

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'testdb',
  password: 'testpassword',
  insecureAuth: true
})

var results = {
  create: -1,
  insert: -1,
  find: -1,
  drop: -1,
  total: -1
}

// Create the test table
const timer = new PreciseTimer({ decimals: 6 })
connection.query(tests.create_mysql,
  function (err, results2, fields) {
    if (err) console.error(err)
    results.create = timer.elapsed
  })
// 100 times the same query
for (let i = 0; i < 10000; i++) {
  connection.query(tests.insert,
    function (err, results2, fields) {
      if (err) console.error(err)
      results.insert = timer.elapsed - results.create
    }
  )
}

// Find one thing
connection.query(tests.find,
  function (err, results2, fields) {
    console.log(err ? err.stack : '')
    results.find = timer.elapsed - (results.insert + results.create)
  }
)

// Drop the table
connection.query(tests.drop,
  function (err, results2, fields) {
    if (err) console.error(err)
    results.drop = timer.elapsed - (results.find + results.insert + results.create)
    console.log('[RESULTS] MySQL'.green)
    results.total = timer.elapsed
    console.table(results)
    connection.close()
  }
)

module.export = {
  results
}
