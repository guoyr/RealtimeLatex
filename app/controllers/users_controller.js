load("application");
/*
 * 
 * variables that we somehome need to get
 */
var currUser = "Daniel"; 
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

 action(function index() {
 	console.log("at index");
 	render({
 		title: "Sign In",
 		current_user: currUser,
 		in_session: true
 	});
 });

 action('login', function(){

 	console.log(req);
 	render(index.jade);


 });

 action(function submit() {

 	console.log("at submit");
 	console.log("req");
 	render();
 	u1 = new userModel();
 	u1.username = "Daniel";
 	u1.passowrd = "1234";
 	u1.save();
 	console.log("u1 saved");
 });