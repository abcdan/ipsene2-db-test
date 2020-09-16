module.exports = {
  create_postgres: 'CREATE TABLE test (userid SERIAL, name VARCHAR(100), lastname VARCHAR(100));',
  create_mysql: 'CREATE TABLE test (userid INT NOT NULL AUTO_INCREMENT PRIMARY KEY , name VARCHAR(100), lastname VARCHAR(100));',
  insert: `INSERT INTO test (name, lastname) VALUES ('${'a'.repeat(100)}', '${'b'.repeat(100)}');`,
  find: 'SELECT * FROM test WHERE userid = 6666;',
  findInject: 'SELECT * FROM test WHERE userid = XXXID;',
  selectAll: 'SELECT * from test',
  drop: 'DROP TABLE test;'
}
