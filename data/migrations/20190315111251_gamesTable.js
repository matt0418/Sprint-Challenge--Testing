
exports.up = function(knex, Promise) {
  return knex.schema.createTable('games', function(tbl) {
      tbl.increments()

      tbl.string('title', 56)
        .notNullable()
        .unique()

      tbl.string('genre', 56)
        .notNullable()

     tbl.integer('release year')
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('games')
};


