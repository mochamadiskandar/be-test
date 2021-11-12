// const express = require('express')
// const cors = require('cors')
const fetch = require('node-fetch')

function fetchMovies() {
  const APIKey = 'aee82e3a'
  const title = 'avengers'
  const pageNumber = 1

  return fetch(
    // ` http://www.omdbapi.com/?i=tt3896198&apikey=${myAPIKey}&t=${params.title}&page2`,
    `http://www.omdbapi.com/?apikey=${APIKey}&s=${title}&page=${pageNumber}`,
  )
}

exports.getMoviesFromAPI = async (result) => {
  const response = await fetchMovies()
  result = await response.json()

  console.log('Movies:', result)
  return result
}
