exports.up = function (knex, Promise) {
  return knex.schema.createTable("movies", movie => {
    movie.increments("id");
    movie.string("titles");
    movie.integer("year");
    movie.integer("rating");
    movie.string("poster");
    movie.string("url")
  });
};
exports.down = function (knex, Promise) {
  return knex.schema.dropTableIfExists("movies");
};
