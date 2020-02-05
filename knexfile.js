// Update with your config settings.

module.exports = {

  development : {
    client : 'sqlite3',
    useNullAsDefault : true,
    connection : {
      filename : './database/dev.db3',
    },
    migrations : {
      directory : './database/migrations',
      tableName : 'knex_migrations',
    },
    seeds : {
      directory : './database/seeds',
    },
  },

  testing : {
    client : 'sqlite3',
    useNullAsDefault : true,
    connection : {
      filename : './database/test.db3',
    },
    migrations : {
      directory : './database/migrations',
      tableName : 'knex_migrations',
    },
    seeds : {
      directory : './database/seeds',
    },
  },

  // staging : {
  //   client : 'postgresql',
  //   connection : {
  //     database : 'my_db',
  //     user :     'username',
  //     password : 'password',
  //   },
  //   pool : {
  //     min : 2,
  //     max : 10,
  //   },
  //   migrations : {
  //     tableName : 'knex_migrations',
  //   },
  // },

  // production : {
  //   client : 'postgresql',
  //   connection : {
  //     database : 'my_db',
  //     user :     'username',
  //     password : 'password',
  //   },
  //   pool : {
  //     min : 2,
  //     max : 10,
  //   },
  //   migrations : {
  //     tableName : 'knex_migrations',
  //   },
  // },

}