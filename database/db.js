const { config } = require ('./__needs')

const knex = require ('knex')
const knexConfig = require ('../knexfile')

module.exports = knex (knexConfig[config.NODE_ENV])
