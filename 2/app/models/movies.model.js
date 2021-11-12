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
}

module.exports = Movies
