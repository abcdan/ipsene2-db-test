
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
client.query(tests.insert, (err, res) => {
  console.log(err ? err.stack : res.rows)
  client.end()
})

module.export = {
  result: {
    write: '10ms'
  }
}
