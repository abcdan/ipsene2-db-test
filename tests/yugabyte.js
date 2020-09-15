/**
 * All results of any test using this this project need to have a
 * backlink to this project.
 *
 * Copyright (c) abcdan - All rights reserved.
 */
console.log('[TESTING] Yugabyte'.blue)

const PreciseTimer = require('precise-timer')
const tests = require('../sql/tests')

const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: '',
  port: 5433
})

client.connect()

var results = {
  create: -1,
  insert: -1,
  find: -1,
  drop: -1,
  total: -1
}
// Create the test table
const timer = new PreciseTimer({ decimals: 6 })
client.query(tests.create_postgres, (err, res) => {
  if (err) console.error(err.name)
  results.create = timer.elapsed
})

// 100 times the same query
for (let i = 0; i < 10000; i++) {
  client.query(tests.insert, (err, res) => {
    if (err) console.error(err.name)
    results.insert = timer.elapsed - results.create
  })
}

// Find one thing
client.query(tests.find, (err, res) => {
  console.log(err ? err.stack : '')
  results.find = timer.elapsed - (results.insert + results.create)
})

// Drop the table
client.query(tests.drop, (err, res) => {
  if (err) console.error(err.name)
  results.drop = timer.elapsed - (results.find + results.insert + results.create)
  console.log('[RESULTS] Yugabyte'.green)
  results.total = timer.elapsed
  console.table(results)
  client.end()
})

module.export = {
  results
}
