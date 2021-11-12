# How To Running

## Number 1

Running file ".sql" tersebut dengan SSMS atau aplikasi sejenisnya.

dengan asumsi database dan tabel sudah ada, jadi tinggal query saja.

## Number 2

### Run in Local With MySql DB

#### Setup MySQL Database

1. Create MySQL Database dengan nama "movie_db"

2. Create Table dengan nama "movies", query sudah disediakan pada file "note.sql"

3. Input Password root untuk connect MySQL ke dalam file : "db.config.js"

#### Run Express JS

1. pastikan directory sudah di dalam folder "2"

2. run "npm install" in terminal

3. run "npm start" in terminal

4. Jika sudah berhasil running dan connect ke port 8080, silahkan hit "API url" seperti dibawah ini dari browser ataupun POSTMAN.

#### Get Movies By Title (local)

<http://localhost:8080/api/movies/search?apiKey=aee82e3a&title=batman&pageNumber=1>

parameter : apiKey, title, pageNumber

#### Get Movies Detail By ImdbId (local)

<http://localhost:8080/api/movies/detail?apiKey=aee82e3a&i=tt0372784>

param : apiKey, i (imdb Id from List movie)

### Run from Public API (without connect MySQL DB)

Url HerokuApp: <https://get-movies-db.herokuapp.com/>

Url getMoviesByTittle : <https://get-movies-db.herokuapp.com/api/movies/search?apiKey=aee82e3a&title=batman&pageNumber=1>

Url getMoviesDetailById : <https://get-movies-db.herokuapp.com/api/movies/detail?apiKey=aee82e3a&i=tt0372784>

## Number 3

run "node script.js", hasil dapat dilihat pada "console.log"

## Number 4

run "node index.js", hasil dapat dilihat pada "console.log"
