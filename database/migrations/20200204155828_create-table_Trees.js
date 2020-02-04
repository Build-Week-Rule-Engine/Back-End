/**************************************/

module.exports = { up, down }

/**************************************/

const TABLE = 'Trees'

function up (knex) {
  return knex.schema.createTable (TABLE, table => {

    table
    .increments ('_id')

    table
    .string ('name', 255)
    .notNullable ()
    .unique ()

    table
    .string ('data', 4096)
    .notNullable ()
    .unique ()

  })
}

function down (knex) {
  return knex.schema.dropTableIfExists (TABLE)
}
