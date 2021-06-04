const express = require('express');
const path = require("path");
const router = express.Router();
const app = express();
const bodyParser = require('body-parser')
const port = 3000;
const client = require("./db");
app.set('view engine', 'hbs');
app.use(bodyParser.urlencoded({
	extended: false
}));
const template = path.join(__dirname, '../views');
router.get('/', function(req, res) {
	res.render('index')
});
app.use(express.static('./'));
app.use(bodyParser.json());
app.post('/data', function(req, res) {
	var p1 = req.body.param1;
	var w1 = req.body.param3;
	var p2 = req.body.param2;
	var w2 = req.body.param4;
	const query = (async() => {
		await client.connect();
		client.query(`INSERT INTO users(username,usewin) VALUES('${p1}',${w1}),('${p2}',${w2})`, (err, result) => {
			if(err) {
				console.error(err);
				return;
			}
			console.log('Data insert successful');
			client.end();
		})
	})
	query();
	res.send(req.body);
});
app.use('/', router);
app.listen(port, () => {
	console.log(`app listing port ${port}`);
});