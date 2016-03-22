import express = require('express');
var mysql = require('mysql'); // node-mysql module
import path = require('path');


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'smiletime'
});
connection.connect();


export function selectTreatments (req: express.Request, res: express.Response) {
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