load("application");
/*
 * 
 * variables that we somehome need to get
 */
var currUser = "Daniel"; 


 action(function index() {
 	render({
 		title: "Sign In",
 		current_user: currUser,
 		in_session: true
 	});
 });

 action('login', function(){

 	//console.log(req);
 	render(index.jade);


 });

 action('submit', function() {
 	console.log("submit");
 	render();
 	u1 = new UserModel();
 	u1.username = "Daniel";
 	u1.passowrd = "1234";
 	u1.save();
 	console.log("u1 saved");
 });