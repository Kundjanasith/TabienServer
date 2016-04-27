// var mysql = require('mysql');
//
// var connection = mysql.createConnection({
//   host: 'ap-cdbr-azure-southeast-b.cloudapp.net',
//   user: 'b2a7703f85d87b',
//   password: '52c368bb',
//   database: 'Tabien'
// });
// connection.connect();
//
// var user = {
//   username: 'username2',
//   password: 'password2',
//   firstname: 'firstname2',
//   lastname: 'lastname2'
// };
//
// var query = connection.query('insert into user set ?', user, function (err, result){
//   // console.log(query.sql);
//   if (err){
//     console.log(err);
//     return;
//   }
//   console.log(result);
// });
//
// connection.end();
//
//  // mysql -u b2a7703f85d87b -p -h ap-cdbr-azure-southeast-b.cloudapp.net
