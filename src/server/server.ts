import express = require('express');
import path = require('path');
import bodyParser = require('body-parser');
import * as pacients from "./api/pacient/controller";
import * as treatments from "./api/treatment/controller";
var port: number = process.env.PORT || 3000;
var app = express();
//var router = express.Router();

/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});
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

app.get('/getPacients', pacients.getPacients);
app.post('/addPacient', pacients.addPacient);
app.get('/getPacientData', pacients.getPacientData);
app.get('/selectTreatments', treatments.selectTreatments);


var renderIndex = (req: express.Request, res: express.Response) => {
    console.log("renderIndex __dirname", __dirname)
    res.sendFile(path.resolve(__dirname, 'index.html'));
}
app.get('/*', renderIndex);

//connection.end();
