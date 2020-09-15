const PreciseTimer = require('precise-timer')
const tests = require('../sql/tests')

const { Client } = require('pg')

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'test',
  password: 'testpassword',
  port: 55432
})

client.connect()

var results = {
  create: 0,
  insert: 0,
  find: 0,
  drop: 0
}
// Create the test table
const timer = new PreciseTimer({ decimals: 6 })
client.query(tests.create_postgres, (err, res) => {
  if (err) console.error(err)
  results.create = timer.elapsed
})

// 100 times the same query
for (let i = 0; i < 100000; i++) {
  client.query(tests.insert, (err, res) => {
    if (err) console.error(err)
    results.insert = timer.elapsed - results.create
  })
}

// Find one thing
client.query(tests.find, (err, res) => {
  console.log(err ? err.stack : res.rows)
  results.find = timer.elapsed - (results.insert + results.create)
})

// Drop the table
client.query(tests.drop, (err, res) => {
  if (err) console.error(err)
  results.drop = timer.elapsed - (results.find + results.insert + results.create)
  console.table(results)
})

module.export = {
  results
}
