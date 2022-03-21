const express = require ("express")
      morgan = require("morgan")

const app = express()     

app.use(morgan('common'));
app.use(express.static('public'));

let topMovies = [

    {

        title: 'Superman vs Batman',
        director: 'Zack Snyder'

     },


     {
         titel: 'Avengers End Game',
         director: 'Anthony Russo / Joe Russo'
        
     },

    {
        titel: 'Spiderman far from Home',
        director: 'Jon Watts'
    }
];


app.get('/movies', (req, res) => {
res.json(topMovies);

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
