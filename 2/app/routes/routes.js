module.exports = (app) => {
  const movies = require('../controllers/controller.js')

  var router = require('express').Router()

  // Retrieve all movies
  router.get('/search', movies.getMovieByTitle)

  // Retrieve a single Movies
  router.get('/detail', movies.getDetailMovieById)

  app.use('/api/movies', router)
}
