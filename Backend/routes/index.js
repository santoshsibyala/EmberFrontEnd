var express = require('express');
var router = express.Router();
var mysql = require('./mysql');
router.get('/api/getpost', function(req, res, next) {
	var qry = 'select * from post';
	console.log('called now');
	mysql.fetchData(qry, [], function(err, results) {
		if (!err) {
			var posts = {
				'posts': results
			};
			console.log(results);
			res.status(200).send(posts);
			res.end();
		} else {
			res.send({
				'error': 'Error fetching the data'
			});
			res.end();
		}

	});
});
router.post('/api/validate/', function(req, res, next) {
	var qry = 'select password from login where name = ?';

	var name = req.body.username;
	var password = req.body.password;
	console.log(req.body);
	var qry2 = 'select * from login where name = ?';

	mysql.fetchData(qry2, [name], function(err, results) {
		if (!err) {
			if (results.length > 0) {
				mysql.fetchData(qry, [name], function(err, results) {
					if (!err) {

						console.log(results);
						var obj = results[0];
						if (obj.password === password) {

							res.status(200).send('{ "access_token": "secret token!", "account_id": 1 }');
							res.end();

						} else {
							res.status(400).send('{ "error": "invalid_grant" }');
							res.end();
						}
					} else {
						res.send({
							'error': 'Error fetching the data'
						});
						res.end();
					}

				});

			} else {
				res.status(400).send('{ "error": "No User Exists" }');
				res.end();
			}

		}

	});

});
module.exports = router;
