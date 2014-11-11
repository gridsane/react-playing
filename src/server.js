
var path = require('path'),
    express = require('express'),
    browserify = require('connect-browserify'),
    ReactAsync = require('react-async');

require('node-jsx').install();
var Application = require('./client'),

app = express();

function renderState(req, res, next) {
    var client = Application({path: req.url});

    ReactAsync.renderComponentToStringWithAsyncState(client, function (err, markup) {
        res.send('<!DOCTYPE html>\n' + markup);
    });
}

app.get('/assets/bundle.js', browserify('./src/client', {
    debug: true,
    watch: true
}));

app
    .use('/assets', express.static('../assets'))
    .use(renderState)
    .listen(9000, function () {
        console.log("Server listening on port 9000");
    });
