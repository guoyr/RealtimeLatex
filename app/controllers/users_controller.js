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
 		current_user: currUser,
 		in_session: true
 	});
 });
