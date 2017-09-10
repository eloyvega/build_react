var swig = require('swig');
var path = require('path');
var express = require('express');

var app = express();

// Setup view engine
app.set('view engine', 'html');
app.engine('html', swig.renderFile);
app.set('views', path.join(__dirname, 'partials'));

app.use(function(req, res) {
    res.render('index', {
        title: 'Hello World',
        cdn: process.env.CDN
    });
});

app.listen(3000, function () {
    console.log(`Server listening on http://localhost:3000, Ctrl+C to stop`);
});
