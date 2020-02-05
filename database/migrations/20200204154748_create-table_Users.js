/**************************************/

module.exports = { up, down }

/**************************************/

const TABLE = 'Users'

function up (knex) {
  return knex.schema.createTable (TABLE, table => {

    table
    .increments ('_id')

    table
    .string ('name', 255)
    .nullable ()
    .unique ()

    table
    .string ('email', 255)
    .notNullable ()
    .unique ()

    table
    .string ('username', 255)
    .notNullable ()
    .unique ()

    table
    .string ('hash', 255)
    .notNullable ()

  })
}

function down (knex) {
  return knex.schema.dropTableIfExists (TABLE)
}
