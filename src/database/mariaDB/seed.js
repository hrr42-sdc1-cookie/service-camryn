const faker = require('faker');
const maria = require('./index.js');

const mariaSeed = {

  generateRestaurants: function (num) {
    for (var i = 1; i <= num; i++) {
      var rest = {
        restaurantID: i,
        restaurantName: faker.company.companyName(),
        menuNames: [],
        menus: null
      }
      var numMenus = Math.floor(Math.random() * 3) + 1;
      for (var j = 0; j < numMenus; j++) {
        rest.menuNames.push(faker.lorem.word());
      }
      rest.menus = mariaSeed.generateMenus(rest.menuNames);
      mariaSeed.seedMariaDB(rest);
    }
    console.log('Finished generating restaurants.')
    return;
  },

  generateMenus: function (arr) {
    var menus = [];
    for (var i = 1; i <= arr.length; i++) {
      var menu = {
        menuID: i,
        menuName: arr[i - 1],
        categories: null,
        items: null
      }
      var cats = Math.floor(Math.random() * 4) + 2;
      menu.categories = mariaSeed.generateCategories(cats);
      menu.items = mariaSeed.generateItems(menu.categories);
      menus.push(menu);
    }
    return menus;
  },

  generateCategories: function (num) {
    var categories = [];
    for (var i = 1; i <= num; i++) {
      categories.push(faker.lorem.word());
    }
    return categories;
  },

  generateItems: function (array) {
    var items = [];
    for (var i = 0; i < array.length; i++) {
      var num = Math.floor(Math.random() * 5) + 6;
      for (var j = 1; j <= num; j++) {
        var item = {
          itemID: JSON.stringify(i) + JSON.stringify(j),
          category: array[i],
          itemName: faker.lorem.word(),
          description: faker.lorem.words(),
          price: '$' + faker.commerce.price()
        }
        items.push(item);
      }
    }
    return items;
  },

  seedMariaDB: function(obj) {

  }

}

module.exports = mariaSeed;