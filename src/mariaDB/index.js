const mariadb = require('mariadb');
const pool = mariadb.createPool({
  host: 'localhost:3603',
  user: 'root',
  password: '',
  connectionLimit: 5
});

pool.getConnection()
  .then((conn) => {
    conn.query("SELECT 1 as val")
      .then((rows) => {
        console.log(rows);
        return conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"]);
      })
      .then((res) => {
        console.log(res);
        conn.end();
      })
      .catch((err) => {
        console.log(err);
        conn.end();
      })
  }).catch((err) => {
    console.log('not connected: ', err);
  })