var Burger = require('../models/burger.js');
var path = require('path');


module.exports = function(app){



app.get('/', function(req,res) {
	

	Burger.findAll({
				where: {
					devoured: 1 
				}
			}).then(function(result){
				
			
				Burger.findAll({
				where: {
					devoured: 0
				}
			}).then(function(result2){
				
				var obj = {
	 			dataFalse:result,
	 			dataTrue:result2
	 			}

	 		res.render('index',obj);

			})

			})

});

app.put('/update', function(req,res){

    Burger.create({
			burger_name: req.body.user_plan ,
			devoured: 1
		}).then(function(){

			res.redirect('/');
		});

});

app.put('/change', function(req,res){

 
	var key = Object.keys(req.body);

	Burger.update(
  		{
    		devoured: 0
  		},
  		{
    		where: { id : key }
  		})
  		.then(function () { 

  		res.redirect('/');
  		});



});






}