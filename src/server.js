var path = require('path');
var express = require('express');
var app = express();

app
    .use('/assets', express.static('../assets'))
    .listen(9000, function () {
        console.log("Server listening on port 9000");
    });
