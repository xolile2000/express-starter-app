const express = require('express');
const exphbs  = require('express-handlebars');

const app = express();
const PORT =  process.env.PORT || 3017;

// enable the req.body object - to allow us to use HTML forms
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// enable the static folder...
app.use(express.static('public'));

// add more middleware to allow for templating support

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

const names = [];

app.get('/', function(req, res) {
	res.send('Hello from my get route : ' + req.query.name);
});

app.get('/info', function(req, res) {
	res.render('info');
	// res.send('Hello from my get route : ' + req.query.name);
});

app.get('/subscribe/:email', function(req, res) {
	const message = 'we will email you at: ' + req.params.email;
	res.send(message);
});

app.post('/info', function(req, res) {

	names.push({
		firstName : req.body.firstName,
		lastName : req.body.lastName
	});

	res.send(`Hello, ${req.body.firstName} ${req.body.lastName}`);
});

app.get('/names', function(req, res) {
	res.render('names', {names, 'code' : '007fy'});
});

// start  the server and start listening for HTTP request on the PORT number specified...

app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});