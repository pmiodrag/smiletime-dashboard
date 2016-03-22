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
export function renderIndex (req: express.Request, res: express.Response){
    console.log("renderIndex __dirname", __dirname)
    res.sendFile(path.resolve(__dirname, 'index.html'));
}
export function getPacients (req: express.Request, res: express.Response)  {
   console.log("getPacients")
   connection.query("SELECT * from patient",function(err,rows){
    if(err) {
        console.log("Problem with MySQL"+err);
        res.send(path.resolve(__dirname, 'pacients.json'));
    } else {
     console.log('The solution is: ', rows[0]);        
     res.send(JSON.stringify(rows));
    }
   });
}
