//
//
// // var INSERT_MODEL_QUERY = ""
//
//
// // var user = {
// //   rating_id: 1,
// //   timestamp: '27-April-2016',
// //   message: 'reply000'
// // };
//
// // var query = connection.query('insert into vehiclemodel set ?', user, function (err, result){
// //   if (err){
// //     console.log(err);
// //     return;
// //   }
// //   console.log(result);
// // });
//
// // exports.module = {
// //
// // }
//
// exports.addNewModel = function(json){
//
//   var mysql = require('mysql');
//
//   var connection = mysql.createConnection({
//     host: 'ap-cdbr-azure-southeast-b.cloudapp.net',
//     user: 'b2a7703f85d87b',
//     password: '52c368bb',
//     database: 'Tabien'
//   });
//
//   connection.connect();
//   var model = {
//     brand: json.brand,
//     make: json.make
//   };
//
//   var query = connection.query('insert into vehiclemodel set ?', model, function (err, result){
//     if (err){
//       console.log("fuck"+err);
//       return;
//     }
//     console.log(result);
//   });
// };
