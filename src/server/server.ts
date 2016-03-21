import express = require('express');
import path = require('path');
var port: number = process.env.PORT || 3000;
var app = express();

app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/styles', express.static(path.resolve(__dirname, 'styles')));
app.use('/fonts', express.static(path.resolve(__dirname, 'assets/fonts')));


var renderCustomer = (req: express.Request, res: express.Response) => {
    console.log("renderCustomer")
    res.sendFile(path.resolve(__dirname, 'customers.json'));
}
app.get('/getcustomers', renderCustomer);




var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});

var mysql = require('mysql'); // node-mysql module
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'smiletime'
});

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;
  console.log('The solution is: ', rows[0].solution);
});
var selectCustomers = (req: express.Request, res: express.Response) => {
    console.log("selectCustomers")
    connection.query("SELECT * from patient",function(err,rows){
    if(err) {
        console.log("Problem with MySQL"+err);
        res.send(path.resolve(__dirname, 'customers.json'));
    } else {
     console.log('The solution is: ', rows[0]);        
        res.send(JSON.stringify(rows));
    }
  });
}
app.get('/selectCustomers', selectCustomers);

var selectTreatments = (req: express.Request, res: express.Response) => {
    console.log("selectTreatments")
    connection.query("SELECT * from treatment",function(err,rows){
    if(err) {
        console.log("Problem with MySQL"+err);
        res.send(path.resolve(__dirname, 'orders.json'));
    } else {
     console.log('The solution is: ', rows[0]);        
        res.send(JSON.stringify(rows));
    }
  });
}
app.get('/selectTreatments', selectTreatments);
var renderIndex = (req: express.Request, res: express.Response) => {
    console.log("renderIndex __dirname", __dirname)
    res.sendFile(path.resolve(__dirname, 'index.html'));
}
app.get('/*', renderIndex);
//connection.end();