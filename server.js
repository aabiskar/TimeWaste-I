var express = require('express');
var mongoose=require('mongoose');
var bodyParser = require('body-parser');

var app = express();
var authenticationController = require('./controllers/authentication-controller');

mongoose.connect('mongodb://localhost:27017/time-waste');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/app',express.static(__dirname + "/app"));
app.use('/node_modules',express.static(__dirname + "/node_modules"));

app.get('/',function(req,res) {
	res.sendfile('index.html');
	//res.send('Hello world');
});

//Authentication
app.post('/api/user/signup',authenticationController.signup);
app.post('/api/user/login',authenticationController.login);

app.listen('3000',function() {
	console.log("This is working.");
});