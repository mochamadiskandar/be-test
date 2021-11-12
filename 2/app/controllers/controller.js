const Movies = require('../models/movies.model.js')
const requestManager = require('../requestManager/request.js')

// Create and Save a new Movies Record
// exports.create = (req, res) => {
//   // Validate request
//   if (!req.body) {
//     res.status(400).send({
//       message: 'Content can not be empty!',
//     })
//   }

//   // Create a movies record
//   const movies = new Movies({
//     date_time: req.body.date_time,
//     api_endpoint: req.body.api_endpoint,
//     paramete: req.body.parameter,
//   })

//   // Save movies record in the database
//   movies.create(movies, (err, data) => {
//     if (err)
//       res.status(500).send({
//         message:
//           err.message || 'Some error occurred while creating the Record.',
//       })
//     else res.send(data)
//   })
// }

// find all id record from databases
exports.getMovieByTitle = (req, res, data) => {
  // get movie direct from DB
  //   requestManager.getMoviesFromAPI(() => {
  //     if (err)
  //       res.status(500).send({
  //         message: err.message || 'Some error occurred while retrieving Movies.',
  //       })
  //     else res.send()
  //   })
  //   requestManager.getMoviesFromAPI(data)

  var today = new Date()
  var date =
    today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate()
  var time =
    today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds()
  var fullDateTime = date + ' ' + time

  const mockRes = {
    date_time: fullDateTime,
    api_endpoint: 'endpoint',
    parameter: 'parameter',
  }
  res.send(mockRes)

  // Create a movies record
  const movies = new Movies(
    mockRes.date_time,
    mockRes.api_endpoint,
    mockRes.parameter,
  )

  console.log(movies)
  movies.create()
  //   movies.create(movies, (err, data) => {
  //     if (err)
  //       res.status(500).send({
  //         message:
  //           err.message || 'Some error occurred while creating the Record.',
  //       })
  //     else res.send(data)
  //   })

  //   if get from db
  //   const id = req.query.id
  //   Movies.getAllRecordByTitle(id, (err, data) => {
  //     if (err)
  //       res.status(500).send({
  //         message: err.message || 'Some error occurred while retrieving Movies.',
  //       })
  //     else res.send(data)
  //   })
}

// Find a single Movies with a id
exports.getDetailMovieById = (req, res) => {
  //   get from db
  //   Movies.findRecordById(req.params.id, (err, data) => {
  //     if (err) {
  //       if (err.kind === 'not_found') {
  //         res.status(404).send({
  //           message: `Not found Movies with id ${req.params.id}.`,
  //         })
  //       } else {
  //         res.status(500).send({
  //           message: 'Error retrieving Movies with id ' + req.params.id,
  //         })
  //       }
  //     } else res.send(data)
  //   })
}
