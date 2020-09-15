module.exports = {
  create_postgres: 'CREATE TABLE test (userid SERIAL, name VARCHAR(100), lastname VARCHAR(100));',
  insert: `INSERT INTO test (name, lastname) VALUES ('${'a'.repeat(100)}', '${'b'.repeat(100)}');`,
  find: 'SELECT * FROM test WHERE userid = 99;',
  drop: 'DROP TABLE test;'
}
