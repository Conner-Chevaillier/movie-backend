exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("movies")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("movies").insert([
        {
          id: 1,
          titles: "Schizoplis",
          directors: "Steven Soderbergh",
          year: "1976",
          rating: "4",
          poster: ""
        },
        {
          id: 2,
          titles: "Nashville",
          directors: "Robert",
          year: "1976",
          rating: "5",
          poster: ""
        },
        {
          id: 3,
          titles: "Idiocracy",
          directors: "Mike Judge",
          year: "2006",
          rating: "5",
          poster: ""
        }
      ]);
    });
};
