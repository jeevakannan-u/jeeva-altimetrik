var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

router.get('/test', function(req, res, next) {
    res.send('Test home page')
});

router.post('/register', function(req, res, next) {
	var firstName = req.body.firstname;
	console.log(firstName);
	
	// data can be captured like the above and sent to db for storing.
	
    res.send('User Registration success ');
});

router.post('/login', function(req, res, next) {
	var userName = req.body.username;
	var password = req.body.password;
	console.log(userName);
	
	// data can be captured like the above and can further used for authentication.
	
    res.send('User Login success ');
});


module.exports = router;
