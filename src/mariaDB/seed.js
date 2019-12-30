const faker = require('faker');

const seedScript = {

  generateRestaurants: function (num) {
    var data = [];
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
      rest.menus = seedScript.generateMenus(rest.menuNames);
      data.push(rest);
    }
    return data;
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
      menu.categories = seedScript.generateCategories(cats);
      menu.items = seedScript.generateItems(menu.categories);
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

  seedWithMariaDB: function() {
    /* TODO */
  }
}

module.exports = seedScript;