const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  connectionLimit: 10
});

const maria = pool.getConnection()
  .then((conn) => {
    console.log('mariadb is connected! connection id: ', conn.threadId);
    conn.release();
  }).catch((err) => {
    console.log('error connecting to mariadb: ', err);
});

// mariadb.createConnection({
//     host: 'localhost',
//     user: 'root',
//     password: ''
//   })
//   .then((conn) => {
//     console.log("Connected! connection id is: ", conn.threadId);
//   })
//   .catch((err) => {
//     console.log('error connecting to mariadb: ', err);
// });


module.exports = maria;