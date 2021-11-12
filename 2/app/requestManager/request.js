const fetch = require('node-fetch')

function fetchMovies(query, url) {
  let str = `http://www.omdbapi.com/?apikey=${query.apiKey}&s=${query.title}&page=${query.pageNumber}`

  if (url.includes('/detail')) {
    str = `http://www.omdbapi.com/?apikey=${query.apiKey}&i=${query.i}`
  }
  return fetch(str)
}

exports.getMoviesFromAPI = async (query, url) => {
  const response = await fetchMovies(query, url)
  const result = await response.json()

  // console.log('Movies:', result)
  return result
}
