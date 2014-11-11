var path = require('path'),
    express = require('express'),
    browserify = require('connect-browserify'),
    app = express();

app.get('/assets/bundle.js', browserify('./src/client', {
    debug: true,
    watch: true
}));

app
    .use('/assets', express.static('../assets'))
    .listen(9000, function () {
        console.log("Server listening on port 9000");
    });
