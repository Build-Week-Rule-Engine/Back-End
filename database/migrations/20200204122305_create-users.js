/**************************************/

module.exports = { up, down }

/**************************************/

function up (knex) {
  return knex.schema.createTable ('users', table => {

    table
    .increments ('_id')

    table
    .string ('username', 255)
    .notNullable ()
    .unique ()

    table
    .string ('email', 255)
    .notNullable ()
    .unique ()

    table
    .string ('hash', 255)
    .notNullable ()

  })
}

function down (knex) {
  return knex.schema.dropTableIfExists ('users')
}
