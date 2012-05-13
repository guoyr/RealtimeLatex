load("application");
/*
 * 
 * variables that we somehome need to get
 */
var currUser = "Daniel"; 

 action(function index() {
 	console.log("at index");
 	render({
 		title: "Sign In",
 		username: currUser,
 		in_session: true,
 		//token: '1a599ac4b4689238e6c10d7b5c77e76d098a3856'
 	});
 });

var mongoose = require('mongoose');
mongoose.connect('mongodb://nocgzh:xuan1231@staff.mongohq.com:10090/app3589375');
Schema = mongoose.Schema;


var Document = new Schema({
	title: String,
	content: [String]
});

var User = new Schema({
	username: String,
	email: String,
	password: String,
	docs: [String]
});

var userModel = mongoose.model('User', User);
var documentModel = mongoose.model('Document', Document);

action(function submit() {

 	console.log("at submit");
 	console.log(req.sessionID);
 	
 	userModel.findOne({'username':req.body.username}, function(err,user){
 	//documentModel.findOne('')
 		if (user == null) {
 			u1 = new userModel();
 			u1.username = req.body.username;
 			u1.passowrd = req.body.password;
 			u1.docs = ["4f89ba3535837d0b02000001", "4f89bc0f780cf62102000003"];
 			u1.save();
 			console.log("new user saved");

 		} else {
 			console.log(user._id);
 			console.log(user.docs);
			console.log("user exists");
 		};
 	});

 	
 	render("index", {
 		title: "Hello",
 		username: req.body.username,
 		in_session: true
 	});
 });