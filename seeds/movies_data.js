exports.seed = function (knex, Promise) {
  // Deletes ALL existing entries
  return knex("movies")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("movies").insert([
        {
          title: 'BladeRunner',
          director: 'Ridley Scott',
          year: 1984,
          my_rating: 5,
          poster_url: 'https://www.imdb.com/title/tt0083658/mediaviewer/rm3676975360'
        },
        {
          title: 'BladeRunner 2049',
          director: 'Ridley Scott',
          year: 2017,
          my_rating: 5,
          poster_url: 'https://www.imdb.com/title/tt0083658/mediaviewer/rm3676975360'
        },
        {
          title: 'Creed II',
          director: 'Steven Caple Jr.',
          year: 2018,
          my_rating: 2,
          poster_url: 'https://www.out.com/sites/out.com/files/2018/06/19/creed_ii-_poster_0.jpg'
        },
        {
          title: 'Transcendence',
          director: 'Wally Pfister',
          year: 1984,
          my_rating: 5,
          poster_url: 'https://www.scifinow.co.uk/news/transcendence-new-johnny-depp-poster-2/'
        },
        {
          title: "Schizoplis",
          director: "Steven Soderbergh",
          year: "1976",
          my_rating: "4",
          poster_url: ""
        },
        {
          title: "Nashville",
          director: "Robert",
          year: "1976",
          my_rating: "5",
          poster_url: ""
        },
        {
          title: "Idiocracy",
          director: "Mike Judge",
          year: "2006",
          my_rating: "5",
          poster_url: ""
        }
      ]);
    });
};
