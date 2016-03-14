System.register(['express', 'path'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var express, path;
    var port, app, renderIndex, server;
    return {
        setters:[
            function (express_1) {
                express = express_1;
            },
            function (path_1) {
                path = path_1;
            }],
        execute: function() {
            port = process.env.PORT || 3000;
            app = express();
            app.use('/app', express.static(path.resolve(__dirname, 'app')));
            app.use('/libs', express.static(path.resolve(__dirname, 'libs')));
            renderIndex = function (req, res) {
                res.sendFile(path.resolve(__dirname, 'index.html'));
            };
            app.get('/*', renderIndex);
            server = app.listen(port, function () {
                var host = server.address().address;
                var port = server.address().port;
                console.log('This express app is listening on port:' + port);
            });
        }
    }
});
//# sourceMappingURL=server.js.map