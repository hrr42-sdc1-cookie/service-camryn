const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const maria = require('../database/mariaDB/index.js');

const app = express();
const Port = 3004;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/../../dist'));
app.use(cors());

app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});

app.get('/api/menus/:restaurantID', (req, res) => {
  const id = parseInt(req.params.restaurantID);
  /* TODO */
})