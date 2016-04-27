// var users = [
// 	{
// 		"id": 1,
// 		"username": "u1",
// 		"password": "p1",
// 		"firstname": "f1",
// 		"lastname": "l1"
// 	},
// 	{
// 		"id": 2,
// 		"username": "u2",
// 		"password": "p2",
// 		"firstname": "f2",
// 		"lastname": "l2"
// 	}
// ];

var users;

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
  users = result;
});

//connection.end();


exports.findAll = function(){
	//connection.end();
	return users;
};

exports.findById = function(id){
	console.log("id"+id);
	console.log("length"+users.length);
	console.log("user"+users[0].id);
	//connection.end();
	for(var i = 0; i < users.length; i++){
		if(parseInt(users[i].id)==parseInt(id)) {
			console.log("success"+id);
			return users[i];
		}
	}
};

