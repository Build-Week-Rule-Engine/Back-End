/**************************************/

module.exports = { seed }

/**************************************/

const TABLE = 'users'

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


exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex(`table_name`).del()
    .then(function () {
      // Inserts seed entries
      return knex(`table_name`).insert([
        {id: 1, colName: `rowValue1`},
        {id: 2, colName: `rowValue2`},
        {id: 3, colName: `rowValue3`}
      ]);
    });
};
