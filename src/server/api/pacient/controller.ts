import express = require('express');
var mysql = require('mysql'); // node-mysql module
import path = require('path');
import * as db from "../connection/db";

export function getPacients (req: express.Request, res: express.Response)  {
   console.log("getPacients")
   db.connection.query("SELECT * from patient",function(err,rows){
    if(err) {
        console.log("Problem with MySQL"+err);
        res.send(path.resolve(__dirname, 'pacients.json'));
    } else {
     console.log('The solution is: ', rows[0]);        
     res.send(JSON.stringify(rows));
    }
   });
}

export function addPacient (req: express.Request, res: express.Response)  {
   console.log("addPacient controller")
   db.connection.query("INSERT INTO patient SET ?", req.params, function(err,rows){
    if(err) {
        console.log("Problem with MySQL"+err);        
    } else {
        console.log('Last insert ID:', res.locals.insertId);
    }
   });
}
