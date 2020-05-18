const knex = require('knex');

const knexConfig = require('../knexfile.js');

const environment = 'development';
console.log('env:', environment)

module.exports = knex(knexConfig[environment]);