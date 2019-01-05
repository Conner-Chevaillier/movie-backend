exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("movies")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("movies").insert([
        {
          title: 'BladeRunner',
          directors: 'Ridley Scott',
          year: 1984,
          my_rating: 5,
          poster_url: 'https://www.imdb.com/title/tt0083658/mediaviewer/rm3676975360'
        },
        {
          title: 'BladeRunner 2049',
          directors: 'Ridley Scott',
          year: 2017,
          my_rating: 5,
          poster_url: 'https://www.imdb.com/title/tt0083658/mediaviewer/rm3676975360'
        },
        {
          title: 'Creed II',
          director: 'Steven Caple Jr.',
          year: 2018,
          rating: 2,
          url: 'https://www.out.com/sites/out.com/files/2018/06/19/creed_ii-_poster_0.jpg'
        },
        {
          title: 'Transcendence',
          directors: 'Wally Pfister',
          year: 1984,
          my_rating: 5,
          poster_url: 'https://www.scifinow.co.uk/news/transcendence-new-johnny-depp-poster-2/'
        },
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
