var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'SE_user1',
  password: 'mysql2021',
  database: 'SEexample'
});

connection.connect();

connection.query('SELECT * from DataList', function (error, results, fields) {
  if (error) {
    console.log(error);
  }
  console.log(results);
});

connection.end();
