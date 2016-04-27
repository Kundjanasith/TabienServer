var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'ap-cdbr-azure-southeast-b.cloudapp.net',
  user: 'b2a7703f85d87b',
  password: '52c368bb',
  database: 'Tabien'
});
connection.connect();
console.log('IS IT RUNNING?');
var user = {
  rating_id: 1,
  timestamp: '27-April-2016',
  message: 'reply000'
};

var query = connection.query('insert into comment set ?', user, function (err, result){
  // console.log(query.sql);
  if (err){
    console.log(err);
    return;
  }
  console.log(result);
});

connection.end();
