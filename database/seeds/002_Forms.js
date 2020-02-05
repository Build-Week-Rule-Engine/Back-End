/**************************************/

module.exports = { seed }

/**************************************/

const TABLE = 'Forms'

function seed (knex) {
  return (
    knex (TABLE)
    .delete () // deletes all entries
    .then (function () {
      // Inserts seed entries
      return knex (TABLE).insert ([
        {
          'name' : `forms-example-1`,
          'data' : `{"name":{"type":"string","value":"name-1"},"date":{"type":"string","value":"date-1"},"company":{"type":"string","value":"company-1"}}`,
        },
        {
          'name' : `forms-example-2`,
          'data' : `{"name":{"type":"string","value":"name-2"},"date":{"type":"string","value":"date-2"},"company":{"type":"string","value":"company-2"}}`,
        },
        {
          'name' : `forms-example-3`,
          'data' : `{"name":{"type":"string","value":"name-3"},"date":{"type":"string","value":"date-3"},"company":{"type":"string","value":"company-3"}}`,
        },
      ])
    })
  )
}
