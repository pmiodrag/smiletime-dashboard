import express = require('express');
import path = require('path');
var port: number = process.env.PORT || 3000;
var app = express();

app.use('/app', express.static(path.resolve(__dirname, 'app')));
app.use('/libs', express.static(path.resolve(__dirname, 'libs')));
app.use('/assets', express.static(path.resolve(__dirname, 'assets')));
app.use('/styles', express.static(path.resolve(__dirname, 'styles')));
app.use('/fonts', express.static(path.resolve(__dirname, 'assets/fonts')));

var renderIndex = (req: express.Request, res: express.Response) => {
    console.log("__dirname", __dirname, "req", req)
    res.sendFile(path.resolve(__dirname, 'index.html'));
}
var renderCustomer = (req: express.Request, res: express.Response) => {
    console.log("renderCustomer")
    res.sendFile(path.resolve(__dirname, 'customers.json'));
}
app.get('/getcustomers', renderCustomer);
app.get('/*', renderIndex);


var server = app.listen(port, function() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('This express app is listening on port:' + port);
});