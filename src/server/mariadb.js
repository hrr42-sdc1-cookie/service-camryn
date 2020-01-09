const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const maria = require('../database/mariaDB/index.js');

const app = express();
const Port = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use(express.static(__dirname + '/../../dist'));
app.use(cors());

app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});

app.get('/api/menus/:restaurantID', (req, res) => {
  const id = parseInt(req.params.restaurantID);

  maria.getConnection()
    .then((conn) => {
      conn.query(`SELECT * FROM menus WHERE restaurantId=${id}`)
        .then((rows) => {
          res.send(rows);
        })
        .catch((err) => {
          console.log('error getting menus: ', err)
        })
    })
    .catch((err) => {
      console.log('err2: ', err)
      conn.end();
    })
});

app.get('/api/categories/:restaurantID', (req, res) => {
  const id = parseInt(req.params.restaurantID);

  maria.getConnection()
    .then((conn) => {
      conn.query(`SELECT * FROM categories WHERE restaurantId=${id}`)
        .then((rows) => {
          res.send(rows);
        })
        .catch((err) => {
          console.log('error getting categories: ', err)
        })
    })
    .catch((err) => {
      console.log('err2: ', err)
      conn.end();
    })
});

app.get('/api/items/:restaurantID', (req, res) => {
  const id = parseInt(req.params.restaurantID);

  maria.getConnection()
    .then((conn) => {
      conn.query(`SELECT * FROM items WHERE restaurantId=${id}`)
        .then((rows) => {
          res.send(rows);
        })
        .catch((err) => {
          console.log('error getting items: ', err)
        })
    })
    .catch((err) => {
      console.log('err2: ', err)
      conn.end();
    })
});
  // console.log(restaurant);
  // output.id = id;
  // output.name = restaurant[0].name;

  // for (var i = 0; i<menus.length; i++) {
  //   menus[i].categories = [];
  //   menus[i].items = [];
  //   output.menuNames.push(menus[i].name);
  //   output.menus.push(menus[i]);
  // }

  // for (var i = 0; i<categories.length; i++) {
  //   for (var j = 0; j<output.menus.length; j++) {
  //     if (categories[i].menuId === output.menus[j].menuId) {
  //       output.menus[j].categories.push(categories[i].name);
  //     }
  //   }
  // }

  // for (var i = 0; i<items.length; i++) {
  //   for (var j = 0; j<output.menus.length; j++) {
  //     if (items[i].menuId === output.menus[j].menuId) {
  //       output.menus[j].items.push(items[i]);
  //     }
  //   }
  // }