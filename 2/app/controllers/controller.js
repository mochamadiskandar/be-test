const Movies = require('../models/movies.model.js')
const requestManager = require('../requestManager/request.js')

var today = new Date()
var date =
  today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
var time =
  today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
var fullDateTime = date + ' ' + time

// get movie by title
exports.getMovieByTitle = async (req, res) => {
  try {
    console.log(req)
    const result = await requestManager.getMoviesFromAPI(
      req.query,
      req.originalUrl,
    )
    console.log(result)
    res.send(result)
  } catch (error) {
    res.send(error)
  }

  // Create a movies record
  const movies = new Movies(
    fullDateTime,
    `http://${req.headers.host}`,
    req.originalUrl,
  )

  console.log(movies)
  movies.create()
}

// Find a single Movies By ID
exports.getDetailMovieById = async (req, res) => {
  try {
    console.log(req)
    const result = await requestManager.getMoviesFromAPI(
      req.query,
      req.originalUrl,
    )
    console.log(result)
    res.send(result)
  } catch (error) {
    res.send(error)
  }

  // Create a movies record
  const movies = new Movies(
    fullDateTime,
    `http://${req.headers.host}`,
    req.originalUrl,
  )

  console.log(movies)
  movies.create()
}
