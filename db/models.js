var mongoose = requrie('mongoose');

mongoose.connect('mongodb://localhost/db');

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