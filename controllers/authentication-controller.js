var mongoose = require('mongoose');
var User = require('../datasets/user');

module.exports.signup = function(req,res) {
	//console.log(req.body);
	var user = new User(req.body);
	user.save();
	res.json(req.body);
}

module.exports.login = function(req,res) {
	User.find(req.body,function(err,results) {
		//console.log(req.body);
		if(err){
			console.log("Error Out");
		}
		//console.log("Data in results::" + results);
		//console.log("result length::"+results.length);

		if(results && results.length ===1){ //User.find returns an array.It can return multiple matches inside that array.  Your function is ensuring that there was only 1 match in the result
				var userData = results[0];
				//console.log(userData);
				res.json({email:req.body.email,_id:userData._id});
			//console.log(req.body.email);
		}
		else{
			console.log("Sorry not found on Database");
		}
	})
}