load("application");
/*
 * 
 * variables that we somehome need to get
 */
var currUser = "Daniel"; 

var mongoose = requrie('mongoose');

mongoose.connect('mongodb://heroku:heroku@staff.mongohq.com:10090/app3589375');

Schema = mongoose.Schema;

var Document = new Schema({
	content: String
});

var User = new Schema({
	username: String,
	email: String,
	password: String,
	docID: [ObjectId]
});

var userModel = mongoose.model('User', User);

 action(function index() {
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

 action('submit', function() {
 	console.log("submit");
 	render(index.jade);
 	u1 = new UserModel();
 });