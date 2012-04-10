#!/usr/bin/env node

var app = module.exports = require('railway').createServer();

if (!module.parent) {
    var port = process.env.PORT || 3000;
    app.listen(port);
    console.log("Railway server listening on port %d within %s environment", port, app.settings.env);
}


var mongoose = require('mongoose');

mongoose.connect('mongodb://heroku:heroku@staff.mongohq.com:10090/app3589375');

Schema = mongoose.Schema;

var Document = new Schema({
	content: String
});

var User = new Schema({
	username: String,
	email: String,
	password: String,
	docID: [Object]
});

var userModel = mongoose.model('User', User);