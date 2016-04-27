var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'ap-cdbr-azure-southeast-b.cloudapp.net',
  user: 'b2a7703f85d87b',
  password: '52c368bb',
  database: 'Tabien'
  // multipleStatement: false
});
connection.connect();

connection.query('select * from user ', function(err, result){
  // if (err){
  //   console.log(err);
  //   return;
  // }
  // console.log(result);
  console.log(result);
});

//connection.end();
