var app = require('express')();
var bodyParser = require('body-parser');
var port = process.env.PORT || 7777;
// var users = require('./user');
// var newu = require('./newuser');
var newmodel = require('./newmodel');
var cors = require('cors')();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'ap-cdbr-azure-southeast-b.cloudapp.net',
  user: 'b2a7703f85d87b',
  password: '52c368bb',
  database: 'Tabien'
  // multipleStatement: false
});
connection.connect();


app.use(cors);
app.get('/', function (req, res) {
    res.send('<h1>Hello Nodexz.js</h1>');
});

// app.get('/user', function (req, res) {
//     res.json(users.findAll());
// });
//
// app.get('/user/:id', function (req, res) {
//     var id = req.params.id;
//     res.json(users.findById(id));
// });

// app.get('/newuser', function (req, res){
// 	res.json(newu);
// });

app.post('/newmodel',function (req,res) {
  // console.log(req.body.brand);
  // console.log(req.body.make);
  // res.json(newmodel.addNewModel(req.body.brand,req.body.make));
  // var json = req.body;
  // console.log("json"+json.brand);
  // newmodel.addNewModel(json);
  // res.send('new model'+json);
  var model = {
    brand: req.body.brand,
    make: req.body.make
  };

  var query = connection.query('insert into vehiclemodel set ?', model, function (err, result){
    if (err){
      console.log("fuck"+err);
      return;
    }
    console.log(result);
  });

});
// app.post('/newuser', function (req, res) {
//     //var json = req.body;
//     // var json = {
//     // 	"id": 2,
//     // 	"username": "u0",
//     // 	"password": "p0",
//     // 	"firstname": "f0",
//     // 	"lastname": "l0"
//     // };
//     // console.log("json"+json);
//     // res.send('Add new '+json.name+' Complete!');
//     res.setHeader('Access-Control-Allow-Origin','*');
//     newu.saveAll();
// });

app.listen(port, function() {
    console.log('Starting node.js on port ' + port);
});
