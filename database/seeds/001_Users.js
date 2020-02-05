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
          'name' : `Koby Stoltenberg`,
          'email' : `users-example-1@example.com`,
          'username' : `users-example-1`,
          // cannot auth
        },
        {
          'name' : `Elijah Conroy`,
          'email' : `users-example-2@example.com`,
          'username' : `users-example-2`,
          // cannot auth
        },
        {
          'name' : `Lexie Batz`,
          'email' : `users-example-3@example.com`,
          'username' : `users-example-3`,
          // cannot auth
        },
        {
          'name' : `Karen Walter`,
          'email' : `users-example-4@example.com`,
          'username' : `users-example-4`,
          // cannot auth
        },
      ])
    })
  )
}
