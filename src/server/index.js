const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const Menus = require('../database/index.js');

const app = express();
const Port = 3003;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(express.static(__dirname + '/../../dist'));
app.use(cors());

// app.get('/api/dinner', function(req, res) {
//   res.status(200);
//   MenuList.fetch("dinner", res.send.bind(res));
// });
// app.get('/api/wine', function(req, res) {
//   res.status(200);
//   MenuList.fetch("wine", res.send.bind(res));
// });

app.get('/api/menus/:restID', (req, res) => {
  const id = parseInt(req.params.restID);
  Menus.findOne({id: id}).lean()
    .then((doc) => {
      res.send(doc);
    })
    .catch((err) => {
      console.log("Error getting the menus: ", err);
    })
})

app.post('/api/menus', (req, res) => {
  const body = req.body;
  console.log(req.body);
  Menus.create({
    id: body.id,
    name: body.name,
  })
    .then((doc) => {
      console.log("New document created: ", doc);
      res.send(201);
    })
    .catch((err) => {
      console.log("Error writing to the database: ", err);
    })
})

app.put('/api/menus/:restID', (req, res) => {
  const id = parseInt(req.params.restID);
  const body = req.body;
  Menus.findOneAndUpdate({ id: id }, body)
    .then((doc) => {
      res.send(200);
      console.log("Updated record: ", doc);
    })
    .catch((err) => {
      console.log("Error updating record: ", err);
    })
})

app.delete('/api/menus/:restID', (req, res) => {
  const id = parseInt(req.params.restID);
  Menus.deleteOne({ id: id })
    .then(() => {
      res.send(200);
    })
    .catch((err) => {
      console.log("Error deleting record: ", err);
    })
})

app.listen(Port, () => {
  console.log(`listening on port ${Port}`);
});