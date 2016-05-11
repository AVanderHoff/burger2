var keys = require('./keys.js');
var Sequelize = require('sequelize');
var source = keys.mySQLKeys;

var sequelize = new Sequelize(source.database, source.user, source.password, {
  host: source.host,
  dialect: 'mysql',

  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },

});

module.exports = sequelize;