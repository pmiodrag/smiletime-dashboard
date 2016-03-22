import express = require('express');
import path = require('path');
import * as routes from "./api/pacient/controller";
//import externalModule = require("./api/pacient/externalModule");
//import ctrl = require('./api/pacient/controller');
var port: number = process.env.PORT || 3000;
var app = express();

app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/styles', express.static(path.resolve(__dirname, 'styles')));
app.use('/fonts', express.static(path.resolve(__dirname, 'assets/fonts')));

var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});

//var mysql = require('mysql'); // node-mysql module
//var connection = mysql.createConnection({
//  host     : 'localhost',
//  user     : 'root',
//  password : 'root',
//  database : 'smiletime'
//});

//connection.connect();

//var getPacients = (req: express.Request, res: express.Response) => {
//   console.log("getPacients")
//   connection.query("SELECT * from patient",function(err,rows){
//    if(err) {
//        console.log("Problem with MySQL"+err);
//        res.send(path.resolve(__dirname, 'pacients.json'));
//    } else {
//     console.log('The solution is: ', rows[0]);        
//        res.send(JSON.stringify(rows));
//    }
//   });
//}
app.get('/getPacients', routes.getPacients);
app.get('/selectTreatments', routes.selectTreatments);

//var selectTreatments = (req: express.Request, res: express.Response) => {
//    console.log("selectTreatments")
//    connection.query("SELECT * from treatment",function(err,rows){
//    if(err) {
//        console.log("Problem with MySQL"+err);
//        res.send(path.resolve(__dirname, 'orders.json'));
//    } else {
//     console.log('The solution is: ', rows[0]);        
//        res.send(JSON.stringify(rows));
//    }
//  });
//}

var renderIndex = (req: express.Request, res: express.Response) => {
    console.log("renderIndex __dirname", __dirname)
    res.sendFile(path.resolve(__dirname, 'index.html'));
}
app.get('/*', renderIndex);

//connection.end();
