var connection = require('./connection.js');

var orm = {
selectFalse: function(callback) {
        var s = 'SELECT * FROM burgers_table WHERE devoured = 1;';
        connection.query(s, function(err, result) {

			if (err) 
            callback(err,null);
            else
            callback(null,result);
        	
        });
},

selectTrue: function(callback) {
        var s = 'SELECT * FROM burgers_table WHERE devoured = 0;';
        connection.query(s, function(err, result) {

            if (err) 
            callback(err,null);
            else
            callback(null,result);
            
        });
},

changeBool:function(id){

		var s = 'UPDATE burgers_table SET devoured=0 WHERE id=?;';
		connection.query(s,[id], function(err, result) {
            console.log("burger at id "+ id + " devoured");
        });
},

newValue:function(name){
	var s = 'INSERT INTO burgers_table (burger_name) VALUES (?);';
	connection.query(s,[name],function(err,result){
		console.log(name + " added to table");
	});
}

};
    
module.exports = orm;
