const express = require ("express")
      morgan = require("morgan")

const app = express()     

app.use(morgan('common'));
app.use(express.static('public'));

let topMovies = [

    {
        genre: 'Sci-Fi',
        title: 'Superman vs Batman',
        director: 'Zack Snyder'

     },


     {
         genre: 'Sci-Fi',
         titel: 'Avengers End Game',
         director: 'Anthony Russo / Joe Russo'
        
     },

    {
        genre: 'Sci-Fi',
        titel: 'Spiderman far from Home',
        director: 'Jon Watts'
    },

    {
        genre: 'Sci-Fi',
        titel: 'Wonder Woman',
        director: 'Patty Jenkis'
    },
    
    {
        genre: 'Sci-Fi',
        titel:'Star Trek',
        director: 'J. J. Abrams'

    }



];

// return a list of All Movies
app.get('/movies', (req, res) => {
res.json(topMovies);

});


//return all movies in chosen genre 
app.get('/movies/:movieTitle', (req, res) => {
    res.json(topMovies.find((movie) => {
      return movie.title === req.params.movieTitle }));
  });


  //return all movies in selected GENRE
  app.get('/movies/genre/:movieGenre', (req, res) => {
    res.json(topMovies.filter((movie) => {
      return movie.genre === req.params.movieGenre;
    }));

});  

//return selected by name DIRECTOR's BIO
app.get('/directors/:name', (req, res) => {
    res.send('Director\'s Bio Selection' );
  });

  //allow new user to register
app.post('/users', (req, res) => {
    res.send('New User added'); 
});

//allow user to add movie to their list of favourites
app.put('/favourites/add/:title', (req, res) => {
    res.send('Added Movie');
  })
  
  //allow user to remove a movie from list of favourites
  app.delete('/favourites/remove/:title', (req, res) => {
    res.send('Remove Movie');
  });
  
  //allow existing user to deregister
  app.delete('/users/delete/:name', (req, res) => {
    res.send('Deleted User');
  });


  
app.get('/', (req, res) =>{
    res.send('Welcome to my App')
});

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Error')
});

app.listen(8080, () => {
    console.log('This app is listening on Port 8080')
});
