var express    = require('express');

app.configure(function(){
    var cwd = process.cwd();
    console.log("cwd -> " + cwd);
    app.use(express.static(cwd + '/public', {maxAge: 86400000}));
    app.set('views', cwd + '/app/views');
    app.set('view engine', 'jade');
    app.set('view options', {complexNames: true, layout:false}); // I don't want to use layouts anymore
    app.set('jsDirectory', '/javascripts/');
    app.set('cssDirectory', '/stylesheets/');
    app.use(express.bodyParser());
    app.use(express.cookieParser('secret'));
    app.use(express.session({secret: 'secret'}));
    app.use(express.methodOverride());
    app.use(app.router);
});
