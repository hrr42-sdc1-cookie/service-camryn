var startTime = Date.now();

const faker = require('faker');
const maria = require('./index.js');
const csv = require('objects-to-csv');

const chunk = 2000;

const generateRestaurants = function (num) {
  const records = 10000000;

  const generate = function (startR, startM, startC, startI) {


    var restaurants = {
      start: startR,
      arr: []
    }
    var menus = {
      start: startM,
      arr: []
    }
    var categories = {
      start: startC,
      arr: []
    }
    var items = {
      start: startI,
      arr: []
    }

    for (var i = 0; i < num; i++) {
      var numM = Math.floor(Math.random() * 3) + 1;
      restaurants.arr.push({
        id: restaurants.start + 1,
        name: faker.company.companyName()
      });
      restaurants.start++;

      for (var j = 0; j < numM; j++) {
        var numC = Math.floor(Math.random() * 3) + 2;
        menus.arr.push({
          id: menus.start + 1,
          name: faker.lorem.word(),
          restaurantId: restaurants.start
        });
        menus.start++;

        for (var k = 0; k < numC; k++) {
          var numI = Math.floor(Math.random() * 5) + 6;
          categories.arr.push({
            id: categories.start + 1,
            name: faker.lorem.word(),
            menuId: menus.start,
            restaurantId: restaurants.start
          });
          categories.start++;

          for (var l = 0; l < numI; l++) {
            items.arr.push({
              id: items.start + 1,
              name: faker.lorem.word(),
              description: faker.lorem.words(),
              price: '$' + faker.commerce.price(),
              categoryId: categories.start,
              menuId: menus.start,
              restaurantId: restaurants.start
            });
            items.start++;
          }
        }
      }
    }

    (async () => {
      const csv1 = new csv(restaurants.arr);
      await csv1.toDisk('./src/database/csv/restaurants.csv', { append: true });

      const csv2 = new csv(menus.arr);
      await csv2.toDisk('./src/database/csv/menus.csv', { append: true });

      const csv3 = new csv(categories.arr)
      await csv3.toDisk('./src/database/csv/categories.csv', { append: true });

      const csv4 = new csv(items.arr)
      await csv4.toDisk('./src/database/csv/items.csv', { append: true });

      if (restaurants.start >= records) {
        const time = Date.now() - startTime;
        const hours = Math.floor(time / 3600000);
        const min = Math.floor((time - (hours * 36000000)) / 60000);
        const seconds = Math.floor((time - (hours * 3600000) - (min * 60000)) / 1000);
        console.log(`Data generation complete. Time elapsed: ${hours} hours, ${min} minutes, ${seconds} seconds`);
        return;
      } else {

        setTimeout(() => {

          console.log(`${((restaurants.start/records) * 100).toFixed(2)}% complete`)
          generate(restaurants.start, menus.start, categories.start, items.start);
        }, 0)
      }
    })();

  }

  generate(0, 0, 0, 0);

}

generateRestaurants(chunk);