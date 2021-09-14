var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'tarasok2013',
  database : 'printcase'
});
 
connection.connect();
 
connection.query('SELECT * from themes', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
});
 
connection.end();