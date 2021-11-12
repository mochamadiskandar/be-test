const con = require('./db.js')

// constructor
class Movies {
  constructor(date_time, api_endpoint, parameter) {
    this.date_time = date_time
    this.api_endpoint = api_endpoint
    this.parameter = parameter
  }

  create() {
    let sql = `INSERT INTO movies (date_time,api_endpoint, parameter) VALUES ("${this.date_time}","${this.api_endpoint}","${this.parameter}");`

    con.query(sql, function (err, result) {
      if (err) throw err
      console.log('Number of records inserted: ' + result.affectedRows)
    })
  }

  // create(newRecordMovies, result) {
  //   sql.query('INSERT INTO movies SET ?', newRecordMovies, (err, res) => {
  //     if (err) {
  //       console.log('error: ', err)
  //       result(err, null)
  //       return
  //     }

  //     console.log('created Movies: ', { id: res.id, ...newRecordMovies })
  //     result(null, { id: res.id, ...newRecordMovies })
  //   })
  // }
}

// const Movies = function (movies) {
//   this.date_time = movies.date_time
//     this.api_endpoint = movies.api_endpoint
//     this.parameter = movies.parameter
// }

// Movies.create = (newRecordMovies, result) => {
//   sql.query('INSERT INTO Movies SET ?', newRecordMovies, (err, res) => {
//     if (err) {
//       console.log('error: ', err)
//       result(err, null)
//       return
//     }

//     console.log('created Movies: ', { id: res.id, ...newRecordMovies })
//     result(null, { id: res.id, ...newRecordMovies })
//   })
// }

// Movies.findRecordById = (id, result) => {
//   sql.query(`SELECT * FROM Movies WHERE id = ${id}`, (err, res) => {
//     if (err) {
//       console.log('error: ', err)
//       result(err, null)
//       return
//     }

//     if (res.length) {
//       console.log('found movies: ', res[0])
//       result(null, res[0])
//       return
//     }

//     // not found Tutorial with the id
//     result({ kind: 'not_found' }, null)
//   })
// }

// Movies.getAllRecordByTitle = (title, result) => {
//   let query = 'SELECT * FROM Movies'

//   if (title) {
//     query += ` WHERE title LIKE '%${title}%'`
//   }

//   sql.query(query, (err, res) => {
//     if (err) {
//       console.log('error: ', err)
//       result(null, err)
//       return
//     }

//     console.log('Movies: ', res)
//     result(null, res)
//   })
// }

// Movies.updateById = (id, movies, result) => {
//   sql.query(
//     'UPDATE Movies SET title = ?, description = ?, published = ? WHERE id = ?',
//     [movies.title, movies.description, movies.published, id],
//     (err, res) => {
//       if (err) {
//         console.log('error: ', err)
//         result(null, err)
//         return
//       }

//       if (res.affectedRows == 0) {
//         // not found Tutorial with the id
//         result({ kind: 'not_found' }, null)
//         return
//       }

//       console.log('updated tutorial: ', { id: id, ...tutorial })
//       result(null, { id: id, ...tutorial })
//     },
//   )
// }

// Tutorial.remove = (id, result) => {
//   sql.query('DELETE FROM tutorials WHERE id = ?', id, (err, res) => {
//     if (err) {
//       console.log('error: ', err)
//       result(null, err)
//       return
//     }

//     if (res.affectedRows == 0) {
//       // not found Tutorial with the id
//       result({ kind: 'not_found' }, null)
//       return
//     }

//     console.log('deleted tutorial with id: ', id)
//     result(null, res)
//   })
// }

// Movies.removeAll = (result) => {
//   sql.query('DELETE FROM movies', (err, res) => {
//     if (err) {
//       console.log('error: ', err)
//       result(null, err)
//       return
//     }

//     console.log(`deleted ${res.affectedRows} Movies`)
//     result(null, res)
//   })
// }

module.exports = Movies
