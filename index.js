var express = require('express');
var bodyParser = require('body-parser');
var multer = require('multer');
var upload = multer();
var app = express();

var name = "";
var phn = 0;
var addr = "";
var loc = "";
var ctype = "";
var gst = "";
var shpn = "";
var price = 0;
var qty = 0;
var item = "";

let mysql = require('mysql');
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'userAdmin',
});

const path = require('path');
const staticPath = path.join(__dirname+'/public')

connection.connect(function(err) {
    if (err) throw err;
});

app.use(bodyParser.json()); 

app.use(bodyParser.urlencoded({ extended: true })); 

app.use(express.static(staticPath));

app.get('/', function(req, res){
   res.sendFile(staticPath);
});

app.get('/form1.html', function(req, res){
    res.sendFile(staticPath+'/form1.html')
})

app.get('/form2.html', function(req, res){
    res.sendFile(staticPath+'/form2.html')
})

app.get('/form3.html', function(req, res){
    res.sendFile(staticPath+'/form3.html')
})

app.post('/', function(req, res){
    console.log(req.body);

})

app.use(upload.array()); 
app.use(express.static('public'));
app.use(express.json());

/*app.post('/retailer.html',function(req,res){
    //console.log(req.body.select, req.body.quantity);
    qty = req.body.quantity;
    item = req.body.select;
    item = "'"+item+"'";

connection.connect(function(err) {
      //if (err) throw err;
      connection.query('INSERT INTO new_schema.event_data (total_qty, item_type) VALUES (' + qty + ', ' + item + ')', function (err, result, fields) {
        console.log(err);
      });
});
});*/

app.get('/buyer.html', function(req, res){
    res.sendFile(staticPath+'/buyer.html');
});

app.get('/donor.html', function(req, res){
    res.sendFile(staticPath+'/donor.html');
});

app.get('/retailer.html', function(req, res){
    res.sendFile(staticPath+'/retailer.html');
});

app.get('/thank-donor.html', function(req, res){
    res.sendFile(staticPath+'/thank-donor.html');
});

app.get('/thank-retail.html', function(req, res){
    res.sendFile(staticPath+'/thank-retail.html');
});

app.post('/savef1', function(req, res){
    console.log(req.body.data);
    //connection.query('INSERT INTO new_schema.event_data (item_type, total_qty) VALUES (' + "'" + req.body.data[0] + "'"+')', function (err, result, fields) {
       // console.log(err);
     // });
    res.end('ok');
})

app.post('/savef2', function(req, res){
    console.log(req.body.data);
    res.end('ok');
})

app.post('/savef3', function(req, res){
    console.log(req.body.data);
    res.end('ok');
})

app.post('/savebd', function(req, res){
    console.log(req.body.data);
    res.end('ok');
})

app.post('/saver', function(req, res){
    console.log(req.body.data);
    res.end('ok');
});

/*app.post('/', function(req, res){
    console.log(req.body);

   res.send("recieved your request!");

   res.redirect('/thankyou.html);
});*/
app.listen(3000);