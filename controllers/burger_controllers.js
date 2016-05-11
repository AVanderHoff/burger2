var Burger = require('../models/burger.js');
var path = require('path');


module.exports = function(app){



app.get('/', function(req,res) {
	
/*	 burger.selectFalse(function(err,dataFalse){

		burger.selectTrue(function(err,dataTrue){
		
	 		var obj = {
	 			dataFalse:dataFalse,
	 			dataTrue:dataTrue
	 		}
	 
	 		res.render('index',obj);
	 	});
	}); */

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

 /*   burger.newValue(req.body.user_plan)
    res.redirect('/'); */
    Burger.create({
			burger_name: req.body.user_plan ,
			devoured: 1
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
  }, function(rejectedPromiseError){

  });




});






}