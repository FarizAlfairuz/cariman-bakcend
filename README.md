# Source Code Backend CariMan

Proyek ini menggunakan framework Express.js

## Cara Menjalankan

Jika menjalankan secara online:

Buka web browser kemudian masuk ke website [CariMan-backend](https://cariman-backend.herokuapp.com/api/cariman) dengan memasukkan atau klik link berikut [https://cariman-backend.herokuapp.com/api/cariman](https://cariman-backend.herokuapp.com/api/cariman)

Jika menjalankan secara lokal:

### `git clone`

Clone repositori ini dengan menjalankan command `git clone https://github.com/FarizAlfairuz/cariman-bakcend`

### `npm install`

Kita perlu menginstall dependency package agar server dapat berjalan dengan menjalankan command `npm install`

### `node app`

Jalankan aplikasi dalam development mode dengan cara mejalankan command `node app`\
Website akan berjalan pada port [http://localhost:5000](http://localhost:5000).\
[http://localhost:5000](http://localhost:5000) digunakan untuk melihat website tersebut secara lokal, tampilan yang muncul adalah dalam bentuk JSON.

### `fuseki-server`

Jalankan command `fuseki-server` pada folder tempat menyimpan Apache Jena Fuseki.\
Website akan berjalan pada port [http://localhost:3030](http://localhost:3030).\
Tambahkan dataset baru bernama Cariman.\
Upload data dataset.ttl yang ada pada folder cariman-backend dengan melakukan clone dari [https://github.com/FarizAlfairuz/cariman-bakcend](https://github.com/FarizAlfairuz/cariman-bakcend).
