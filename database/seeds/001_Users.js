/**************************************/

module.exports = { seed }

/**************************************/

const TABLE = 'Users'

function seed (knex) {
  return (
    knex (TABLE)
    .delete () // deletes all entries
    .then (function () {
      // Inserts seed entries
      return knex (TABLE).insert ([
        {
          'username' : `Dummy1`,
          'email' : `dummy1@example.com`,
          'hash' : `Dummy1 - cannot auth`,
        },
        {
          'username' : `Dummy2`,
          'email' : `dummy2@example.com`,
          'hash' : `Dummy2 - cannot auth`,
        },
        {
          'username' : `Dummy3`,
          'email' : `dummy3@example.com`,
          'hash' : `Dummy3 - cannot auth`,
        },
      ])
    })
  )
}
