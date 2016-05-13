var Sequelize = require("sequelize"); 
var sequelize = require("../config/connection.js"); 





var Burger = sequelize.define("burgers_table", {
	id: {
		type: Sequelize.INTEGER,
		autoIncrement: true,
		primaryKey: true
	},
	burger_name: {
		type: Sequelize.STRING
	},
	devoured: {
		type: Sequelize.BOOLEAN
	},
	date: {
		type: Sequelize.DATE
	}


});


Burger.sync();


module.exports = Burger;