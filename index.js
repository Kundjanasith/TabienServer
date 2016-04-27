var app = require('express')();
var bodyParser = require('body-parser');
var port = process.env.PORT || 7777;
var users = require('./user');
var newu = require('./newuser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', function (req, res) {
    res.send('<h1>Hello Node.js</h1>');
});

app.get('/user', function (req, res) {
    res.setHeader('Access-Control-Allow-Origin','*');
    res.json(users.findAll());
});

app.get('/user/:id', function (req, res) {
    var id = req.params.id;
    res.json(users.findById(id));
});

app.get('/newuser', function (req, res){
	res.json(newu);
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


