// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/games.sqlite3'
    },
    migrations: {
      directory: './data/migrations',
    },
  },

  testing: {
    client: 'sqlite3',
    useNullAsDefault: true,
    connection: {
      filename: './data/tests.sqlite3'
    },
    migrations: {
      directory: './data/migrations',
    },
  },


};
