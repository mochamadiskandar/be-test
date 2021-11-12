# How To Running

## Number 1

Running file .sql tersebut dengan SSMS atau aplikasi lainnya.

dengan asumsi databasenya sudah ada, jadi tinggal query saja.

## Number 2

### Connect to MySQL

database MySQL belum di publish.

jika ingin mencoba di local silahkan buat table dengan struktur seperti pada file "note.sql"

untuk credential database harap disesuaikan dengan file "db.config.js"

### Get Data From Databases

service sudah coba di publish ke public url : "https://get-movies-db.herokuapp.com/"

namun masih error dan tidak bisa diakses.

Jadi untuk sementara akses dari local dengan cara sebagai berikut :

0. pastikan directory sudah di dalam folder "2"

1. run "npm install" in terminal

2. run "npm start" in terminal

3. Jika sudah berhasil running dan connect ke port 8080, silahkan hit "API url" seperti dibawah ini dari browser ataupun POSTMAN.

#### Get Movies By Title

"http://localhost:8080/api/movies/search?apiKey=aee82e3a&title=batman&pageNumber=1"

parameter : apiKey, title, pageNumber

#### Get Movies Detail By ImdbId

"http://localhost:8080/api/movies/detail?apiKey=aee82e3a&i=tt0372784"

param : apiKey, i (imdb Id from List movie)

## Number 3

run "node script.js"
hasil dapat dilihat pada "console.log"

## Number 4

run "node index.js"
hasil dapat dilihat pada "console.log"
