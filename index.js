var app = require('express')();
var bodyParser = require('body-parser');
var port = process.env.PORT || 7777;
// var users = require('./user');
// var newu = require('./newuser');
// var newmodel = require('./newmodel');
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

// input = user.id
// output = user
app.get('/user/:id', function (req, res) {
    console.log('user start');
    var id = req.params.id;
    console.log('about to query for id=' + id);
    var users;
    connection.query({
        sql: 'SELECT * FROM user WHERE id = ?',
        timeout: 40000, // 40s
      },
      [id],
      function (error, results, fields) {
        console.log('user query laew');
        if (error) {
          console.log('user error in query woi: ' + error);
          return;
        }
         res.json(results);
      }
    );
});

// input = vehicle.id
// output = user
app.get('/userByVID/:id', function (req, res) {
    console.log('user start');
    var id = req.params.id;
    console.log('about to query for id=' + id);
    var users;
    connection.query({
        sql: 'SELECT * FROM user, vehicle WHERE user.id = vehicle.user_id AND vehicle.id = ?',
        timeout: 40000, // 40s
      },
      [id],
      function (error, results, fields) {
        console.log('user query laew');
        if (error) {
          console.log('user error in query woi: ' + error);
          return;
        }
         res.json(results);
      }
    );
});

// input = vehicle.id
// output = model
app.get('/modelByVID/:id', function (req, res) {
    console.log('user start');
    var id = req.params.id;
    console.log('about to query for id=' + id);
    var users;
    connection.query({
        sql: 'SELECT * FROM vehiclemodel, vehicle WHERE vehiclemodel.id = vehicle.vehiclemodel_id AND vehicle.id = ?',
        timeout: 40000, // 40s
      },
      [id],
      function (error, results, fields) {
        console.log('user query laew');
        if (error) {
          console.log('user error in query woi: ' + error);
          return;
        }
         res.json(results);
      }
    );
});

// input = rate
// output = number of rate
app.get('/progressRate/:rate', function (req, res) {
    console.log('user start');
    var rate = req.params.rate;
    // console.log('about to query for id=' + id);
    var users;
    connection.query({
        sql: 'SELECT count(*) as proRate FROM rating where rate = ?',
        timeout: 40000, // 40s
      },
      [rate],
      function (error, results, fields) {
        console.log('user query laew');
        if (error) {
          console.log('user error in query woi: ' + error);
          return;
        }
         res.json(results);
      }
    );
});

// input = user.id
// output = all vehicle of user.id
app.get('/vehicle/:id', function (req, res) {
    var id = req.params.id;
    console.log('vehicle start');
    console.log('about to query for id=' + id);
    var users;
    connection.query({
        sql: 'SELECT * FROM vehiclemodel , vehicle WHERE user_id = ? AND vehicle.vehiclemodel_id = vehiclemodel.id',
        timeout: 40000, // 40s
      },
      [id],
      function (error, results, fields) {
        console.log('vehicle query laew');
        if (error) {
          console.log('error in query woi: ' + error);
          return;
        }
        console.log("vehicle Parse"+results);
        console.log(res.json(results));
      }
    );
});

// input = vehicle.id
// output = vehicle of vehicler.id
app.get('/vehicleByVID/:id', function (req, res) {
    var id = req.params.id;
    console.log('vehicle start');
    console.log('about to query for id=' + id);
    var users;
    connection.query({
        sql: 'SELECT * FROM vehicle WHERE id = ?',
        timeout: 40000, // 40s
      },
      [id],
      function (error, results, fields) {
        console.log('vehicle query laew');
        if (error) {
          console.log('error in query woi: ' + error);
          return;
        }
        console.log("vehicle Parse"+results);
        console.log(res.json(results));
      }
    );
});

// input = user.id
// output = number of vehicles of user.id
app.get('/numvehicle/:id', function (req, res) {
    var id = req.params.id;
    console.log('num vehicle start');
    console.log('about to query for id=' + id);
    var users;
    connection.query({
        sql: 'select count(*) as num from user, vehicle where vehicle.user_id = user.id and user.id = ?',
        timeout: 40000, // 40s
      },
      [id],
      function (error, results, fields) {
        console.log('num vehicle query laew');
        if (error) {
          console.log('error in query woi: ' + error);
          return;
        }
        console.log("num vehicle Parse"+results);
        console.log(res.json(results));
      }
    );
});

// output = province
app.get('/province', function (req, res) {
    console.log('province start');
    // console.log('about to query for id=' + id);
    var users;
    connection.query({
        sql: 'select name from province',
        timeout: 40000, // 40s
      },
      [],
      function (error, results, fields) {
        console.log('num vehicle query laew');
        if (error) {
          console.log('error in query woi: ' + error);
          return;
        }
        console.log("province vehicle Parse"+results);
        console.log(res.json(results));
      }
    );
});

// output = vehiclemodel
app.get('/vehiclemodel', function (req, res) {
    console.log('vehiclemodel start');
    // console.log('about to query for id=' + id);
    var users;
    connection.query({
        sql: 'select id, brand, make from vehiclemodel',
        timeout: 40000, // 40s
      },
      [],
      function (error, results, fields) {
        console.log('num vehicle query laew');
        if (error) {
          console.log('error in query woi: ' + error);
          return;
        }
        console.log("province vehicle Parse"+results);
        console.log(res.json(results));
      }
    );
});

// input = username && password
// output = user
app.get('/getuser/:username/:password', function (req, res){
  console.log('get user start');
  var username = req.params.username;
  var password = req.params.password;
  // console.log('about to query for id=' + id);
  connection.query({
      sql: 'SELECT * FROM user WHERE username = ? and password = ?',
      timeout: 40000, // 40s
    },
    [username,password],
    function (error, results, fields) {
      console.log('user query laew');
      if (error) {
        console.log('error in query woi: ' + error);
        return;
      }
       res.json(results);
    }
  );
});

// input = request rating
// output = add new rating
app.post('/newrating',function (req,res) {
  var rating = {
    user_id: req.body.user_id,
    vehicle_id: req.body.vehicle_id,
    rate: req.body.rate,
    timestamp: req.body.timestamp,
    message: req.body.message
  };
  connection.query('insert into rating set ?', rating, function(err, result){
    if (err){
      console.log("fuck"+err);
      return;
    }
    console.log(result);
  });
});

// input = vid && rid
// output = rate of vid
app.get('/initRate/:id', function (req, res){
  console.log('get user start');
  var id = req.params.id;
  // console.log('about to query for id=' + id);
  connection.query({
      sql: 'SELECT * FROM rating WHERE vehicle_id = ?',
      timeout: 40000, // 40s
    },
    [id],
    function (error, results, fields) {
      console.log('user query laew');
      if (error) {
        console.log('error in query woi: ' + error);
        return;
      }
       res.json(results);
    }
  );
});

// input = vid
// output = num rate of vid
app.get('/numRate/:id', function (req, res){
  console.log('get user start');
  var id = req.params.id;
  connection.query({
      sql: 'SELECT count(*) as num FROM rating WHERE vehicle_id = ?',
      timeout: 40000, // 40s
    },
    [id],
    function (error, results, fields) {
      console.log('user query laew');
      if (error) {
        console.log('error in query woi: ' + error);
        return;
      }
       res.json(results);
    }
  );
});

// input = vid
// output = avg rate of vid
app.get('/avgRate/:id', function (req, res){
  console.log('get user start');
  var id = req.params.id;
  connection.query({
      sql: 'SELECT avg(rate) as avgRate FROM rating WHERE vehicle_id = ?',
      timeout: 40000, // 40s
    },
    [id],
    function (error, results, fields) {
      console.log('user query laew');
      if (error) {
        console.log('error in query woi: ' + error);
        return;
      }
       res.json(results);
    }
  );
});

// input = request rating
// output = add new rating
app.post('/newcomment',function (req,res){
  var comment = {
      rating_id: req.body.rating_id,
      timestamp: req.body.time,
      message: req.body.msg
  };
  connection.query('insert into comment set ?', comment, function(err, result){
    if (err){
      console.log('fuck'+err);
      return;
    }
    consoloe.log(result);
  });
});

// input = request model
// output = add new model
app.post('/newmodel',function (req,res) {
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


// input = request vehicle
// output = add new vehicle
app.post('/newvehicle',function (req,res) {
  console.log("Call lqew");
  console.log(req.body.vehiclemodel_id);
  var vehicle = {
    vehiclemodel_id: req.body.vehiclemodel_id,
    first_block: req.body.first_block,
    second_block: req.body.second_block,
    province: req.body.province,
    color: req.body.color,
    user_id: req.body.user_id,
  };
  connection.query('insert into vehicle set ?', vehicle, function (err, result){
    if (err){
      console.log("fuck"+err);
      return;
    }
    console.log(result);
  });
  console.log("Q3");
});

// input = request user
// output = add new user
app.post('/newuser',function (req,res) {
  var user = {
    username: req.body.username,
    password: req.body.password,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    location: req.body.location
  };
  var query = connection.query('insert into user set ?', user, function (err, result){
    if (err){
      console.log("fuck"+err);
      return;
    }
    console.log(result);
  });
});

// input = request user
// output = update user
app.post('/updateuser',function (req,res) {
  var id = req.body.id;
  var username = req.body.username;
  var password = req.body.password;
  var firstname = req.body.firstname;
  var lastname = req.body.lastname;
  var location = req.body.location;
  var email = req.body.email;
  connection.query({
      sql: 'update user set username = ?, password = ?, firstname = ?, lastname = ?, location = ?, email = ? where id = ?',
      timeout: 40000, // 40s
    },
    [username,password,firstname,lastname,locationm,email,id],
    function (error, results, fields) {
      console.log('user query laew');
      if (error) {
        console.log('error in query woi: ' + error);
        return;
      }
       res.json(results);
    }
  );
});

// input = request vehicle
// output = update vehicle
app.post('/updatevehicle',function (req,res) {
  var id = req.body.id;

  // var user_id = req.body.user_id;
  // var vehiclemodel_id = req.body.vehiclemodel_id;
  var first = req.body.first_block;
  var second = req.body.second_block;
  var color = req.body.color;
  var province = req.body.province;

  console.log("ID"+id);
  connection.query({
      sql: 'update vehicle set first_block = ?, second_block = ?, color = ?, province = ? where id = ?',
      timeout: 40000, // 40s
    },
    [first,second,color,province,id],
    function (error, results, fields) {
      console.log('user query laew');
      if (error) {
        console.log('error in query woi: ' + error);
        return;
      }
       res.json(results);
    }
  );
});

// input =  user id && vehicle id
// output = update vehicle
app.post('/updatevehicle',function (req,res) {
  var id = req.body.id;

  connection.query({
      sql: 'update user set username = ?, password = ?, firstname = ?, lastname = ?, location = ?, email = ? where id = ?',
      timeout: 40000, // 40s
    },
    [username,password,firstname,lastname,location,email,id],
    function (error, results, fields) {
      console.log('user query laew');
      if (error) {
        console.log('error in query woi: ' + error);
        return;
      }
       res.json(results);
    }
  );
});

// input = request user
// output = drop user
app.post('/deleteuser',function (req,res) {
  var id = req.body.id;
  connection.query({
      sql: 'delete from user where id = ?',
      timeout: 40000, // 40s
    },
    [id],
    function (error, results, fields) {
      console.log('user query laew');
      if (error) {
        console.log('error in query woi: ' + error);
        return;
      }
       res.json(results);
    }
  );
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
