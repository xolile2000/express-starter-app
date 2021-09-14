const express = require('express');
const exphbs  = require('express-handlebars');
const shoppingCart = require('./shoppingCart');

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
const shoppingCarts = shoppingCart();

let counter = 0;



app.get('/', function(req, res) {
	res.render('index', {
		mediumTotal : shoppingCarts.getMediumTotal(),
		largeTotal : shoppingCarts.getLargeTotal(),
		smallTotal : shoppingCarts.getSmallTotal(),		
		totalPrice : shoppingCarts.pricetotal()
		
	});
	//console.log(shoppingCarts.getMediumTotal())
});
app.post('/buy',function(req,res){

 var pizzaSize = req.body.medium
 
 


shoppingCarts.buy(pizzaSize)

	res.redirect('/')
});
app.post('/buy/:large',function(req,res){
	var pizzaSize = req.body.large
   
   
   shoppingCarts.buy(pizzaSize)
   
	   res.redirect('/', {pizzaSize:req.body.large})
   });

   app.post('buy/:small',function(req,res){
	var pizzaSize = req.body.small
   
   
   shoppingCarts.buy(pizzaSize)
  
	   res.redirect('/')
   });


app.get('order',function(req,res){

});

// app.post('/count', function(req, res) {
// 	counter++;
// 	res.redirect('/')
// });


// start  the server and start listening for HTTP request on the PORT number specified...
app.listen(PORT, function() {
	console.log(`App started on port ${PORT}`)
});