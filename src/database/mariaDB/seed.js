const faker = require('faker');
const maria = require('./index.js');
const csv = require('objects-to-csv');

const generateRestaurants = function (num) {
  var restaurants = [];
  var menus = [];
  var categories = [];
  var items = [];
  for (var i = 0; i < num; i++) {
    var numM = Math.floor(Math.random() * 3) + 1;
    restaurants.push({
      id: restaurants.length + 1,
      name: faker.company.companyName()
    });
    for (var j = 0; j < numM; j++) {
      var numC = Math.floor(Math.random() * 4) + 2;
      menus.push({
        id: menus.length + 1,
        name: faker.lorem.word(),
        restaurantId: restaurants.length
      });
      for (var k = 0; k < numC; k++) {
        var numI = Math.floor(Math.random() * 5) + 6;
        categories.push({
          id: categories.length + 1,
          name: faker.lorem.word(),
          menuId: menus.length,
          restaurantId: restaurants.length
        });
        for (var l = 0; l < numI; l++) {
          items.push({
            id: items.length + 1,
            name: faker.lorem.word(),
            description: faker.lorem.words(),
            price: '$' + faker.commerce.price(),
            categoryId: categories.length,
            menuId: menus.length,
            restaurantId: restaurants.length
          });
        }
      }
    }
  }
  new csv(restaurants).toDisk('./csv/restaurants.csv');
  new csv(menus).toDisk('./csv/menus.csv');
  new csv(categories).toDisk('./csv/categories.csv');
  new csv(items).toDisk('./csv/items.csv');
}

generateRestaurants(10000000);