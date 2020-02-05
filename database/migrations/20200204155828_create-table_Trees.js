/**************************************/

module.exports = { up, down }

/**************************************/

const TABLE = 'Trees'

function up (knex) {
  return knex.schema.createTable (TABLE, table => {

    table
    .increments ('_id')

    table
    .integer ('form_id').unsigned ()
    .references ('_id').inTable ('Forms')
    .onUpdate ('CASCADE') // keep Tree, update referenced _id
    .onDelete ('SET NULL') // keep Tree, but it no longer references a Form
    .nullable () // in case the referenced Form is ever deleted

    table
    .string ('name', 255)
    .notNullable ()

    table
    .string ('data', 4096)
    .notNullable ()

  })
}

function down (knex) {
  return knex.schema.dropTableIfExists (TABLE)
}
