const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: 'localhost',
  user: 'root',
  connectionLimit: 10
});

// const maria = pool.getConnection()
//   .then((conn) => {
//     console.log('mariadb is connected! connection id: ', conn.threadId);
//     conn.query("USE openT")
//       .then()
//   }).catch((err) => {
//     console.log('error connecting to mariadb: ', err);
// });


module.exports = pool;