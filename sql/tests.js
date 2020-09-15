module.exports = {
  create_postgres: 'CREATE TABLE test (userid SERIAL, name VARCHAR(100), lastname VARCHAR(100));',
  database: 'CREATE DATABASE test;',
  create_mysql: 'CREATE TABLE test (userid AUTO INCREMENT, name VARCHAR(100), lastname VARCHAR(100));',
  insert: `INSERT INTO test (name, lastname) VALUES ('${'a'.repeat(100)}', '${'b'.repeat(100)}');`,
  find: 'SELECT * FROM test WHERE userid = 6666;',
  drop: 'DROP TABLE test;'
}
