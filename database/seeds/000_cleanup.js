/**************************************/

module.exports = { seed }

/**************************************/

const cleaner = require ('knex-cleaner')

function seed (knex) {
  return cleaner.clean (knex, {
    ignoreTables : [ 'knex_migrations', 'knex_migrations_lock' ], // don't empty migration tables
  })
}
