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
var documentModel = mongoose.model('Document', Document);

 action(function index() {
 	console.log("at index");
 	render({
 		title: "Sign In",
 		current_user: currUser,
 		in_session: true
 	});
 });


 action(function submit() {

 	console.log("at submit");
 	/*
 	userModel.findOne({'username':req.body.username}, function(err,user){
 		
 		if (user == null) {
 			u1 = new userModel();
 			u1.username = req.body.username;
 			u1.passowrd = req.body.password;
 			u1.save();
 			console.log("new user saved");
 		};
 	})
 	*/
 	render({
 		username = req.body.username
 		});
 });