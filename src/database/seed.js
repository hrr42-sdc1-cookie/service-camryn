const MenuList = require('./index.js');
const db = require('./menu.js');
const faker = require('faker');

const sampleMenu = [
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Starters",
    item: "Perry's Signature Fried Asparagus",
    description: "Topped with jumbo lump crabmeat",
    price: 19.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Starters",
    item: "Perry's Famous Pork Chop 'Bites'",
    description: null,
    price: 13.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Starters",
    item: "Cherry Pepper Calamari'",
    description: null,
    price: 17.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Starters",
    item: "Seafood Stuffed Mushrooms'",
    description: null,
    price: 12.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Starters",
    item: "Beef & Bleu *",
    description: null,
    price: 14.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Starters",
    item: "Crab Cakes",
    description: null,
    price: 19.50
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Steaks & Chops",
    item: "Prime Ribeye* 14 Oz.",
    description: null,
    price: 50.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Steaks & Chops",
    item: "Prime New York Strip* 14 Oz.",
    description: null,
    price: 50.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Steaks & Chops",
    item: "Filet Mignon* 6 Oz.",
    description: null,
    price: 41.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Steaks & Chops",
    item: "Filet Mignon* 8 Oz.",
    description: null,
    price: 45.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Bone-In Cuts",
    item: "Bone-In Filet Mignon* 14 Oz.",
    description: null,
    price: 62.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Bone-In Cuts",
    item: "Double-Cut Lamb Chops* 14 Oz.",
    description: null,
    price: 48.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Bone-In Cuts",
    item: "Prime Bone-In Cowboy Ribeye* 22 Oz.",
    description: null,
    price: 57.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Bone-In Cuts",
    item: "Tomahawk Ribeye* 32 Oz.",
    description: null,
    price: 99.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Seafood",
    item: "Chargrilled Salmon*",
    description: "Served with lemon dill butter and cauliflower mousse",
    price: 38.00
  },
  {
    restaurant_id: 100,
    menuType: "dinner",
    category: "Seafood",
    item: "Fried Shrimp",
    description: "Served with your choice of french fries or sweet potato fries",
    price: 32.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Sparking Wines",
    item: "MV Jeio Bisol Prosecco, Veneto, Italy - Glass",
    description: null,
    price: 12.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Sparking Wines",
    item: "MV Jeio Bisol Prosecco, Veneto, Italy - Bottle",
    description: null,
    price: 48.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Sparking Wines",
    item: "MV Domaine Chandon Brut, California - Glass",
    description: null,
    price: 16.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Sparking Wines",
    item: "MV Domaine Chandon Brut, California - Bottle",
    description: null,
    price: 64.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "White Wines & Rosé",
    item: "2017 Marques de Caceres Dry Rosé, Rioja, Spain - Glass",
    description: null,
    price: 8.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "White Wines & Rosé",
    item: "2017 Marques de Caceres Dry Rosé, Rioja, Spain - Bottle",
    description: null,
    price: 32.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "White Wines & Rosé",
    item: "MV Castello del Poggio Moscato, Italy - Glass",
    description: null,
    price: 10.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "White Wines & Rosé",
    item: "MV Castello del Poggio Moscato, Italy - Bottle",
    description: null,
    price: 40.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "White Wines & Rosé",
    item: "2017 Hess 'Shirtail Ranches' Chardonnay, California - Glass",
    description: null,
    price: 10.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "White Wines & Rosé",
    item: "2017 Hess 'Shirtail Ranches' Chardonnay, California - Bottle",
    description: null,
    price: 40.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Red Wines",
    item: "2016 Perrin Reserve Cotes du Rhone, Southern Rhone, France - Glass",
    description: null,
    price: 9.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Red Wines",
    item: "2016 Perrin Reserve Cotes du Rhone, Southern Rhone, France - Bottle",
    description: null,
    price: 36.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Red Wines",
    item: "2017 J. Lohr Pinot Noir, Monterey - Glass",
    description: null,
    price: 10.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Red Wines",
    item: "2017 J. Lohr Pinot Noir, Monterey - Bottle",
    description: null,
    price: 40.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Red Wines",
    item: "2017 Cartlidge & Browne Cabernet, California - Glass",
    description: null,
    price: 11.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Red Wines",
    item: "2017 Cartlidge & Browne Cabernet, California - Bottle",
    description: null,
    price: 44.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Red Wines",
    item: "2017 TintoNegro Malbec, Uco Valley, Mendoza - Glass",
    description: null,
    price: 11.00
  },
  {
    restaurant_id: 100,
    menuType: "wine",
    category: "Red Wines",
    item: "2017 TintoNegro Malbec, Uco Valley, Mendoza - Bottle",
    description: null,
    price: 44.00
  }
];

const insertSampleMenu = function () {
  MenuList.create(sampleMenu)
};

// insertSampleMenu();


// new seeding script:

var generateRestaurants = function (num) {
  var data = [];
  for (var i = 1; i <= num; i++) {
    var rest = {
      id: i,
      menus: null
    }
    var numMenus = Math.floor(Math.random() * 3) + 1;
    rest.menus = generateMenus(numMenus);
    data.push(rest);
  }
  return data;
}

var generateMenus = function (num) {
  var menus = [];
  for (var i = 1; i <= num; i++) {
    var menu = {
      name: faker.lorem.word(),
      categories: null,
      items: null
    }
    var cats = Math.floor(Math.random() * 4) + 2;
    menu.categories = generateCategories(cats);
    menu.items = generateItems(menu.categories);
    menus.push(menu);
  }
  return menus;
}

var generateCategories = function (num) {
  var categories = [];
  for (var i = 1; i <= num; i++) {
    categories.push(faker.lorem.word());
  }
  return categories;
}

var generateItems = function (array) {
  var items = [];
  for (var i = 0; i < array.length; i++) {
    var num = Math.floor(Math.random() * 5) + 6;
    for (var j = 1; j <= num; j++) {
      var item = {
        id: JSON.stringify(i) + JSON.stringify(j),
        category: array[i],
        name: faker.lorem.word(),
        description: faker.lorem.words(),
        price: '$' + faker.commerce.price()
      }
      items.push(item);
    }
  }
  return items;
}

console.log(JSON.stringify(generateRestaurants(1)));

var exampleJSON = [
  {
    "id": 1,
    "menus": [
      {
        "name": "modi",
        "categories": ["odit", "numquam", "blanditiis", "eius"],
        "items": [
          {
            "id": "01",
            "category": "odit",
            "name": "quis",
            "description": "non repellendus ut",
            "price": "$855.00"
          },
          {
            "id": "02",
            "category": "odit",
            "name": "nulla",
            "description": "corrupti quisquam vel",
            "price": "$642.00"
          },
          {
            "id": "03",
            "category": "odit",
            "name": "blanditiis",
            "description": "fugiat maxime quidem",
            "price": "$394.00"
          },
          {
            "id": "04",
            "category": "odit",
            "name": "nemo",
            "description": "dignissimos accusantium voluptas",
            "price": "$421.00"
          },
          {
            "id": "05",
            "category": "odit",
            "name": "eveniet",
            "description": "earum laudantium et",
            "price": "$120.00"
          },
          {
            "id": "06",
            "category": "odit",
            "name": "minus",
            "description": "ut impedit est",
            "price": "$401.00"
          },
          {
            "id": "07",
            "category": "odit",
            "name": "sint",
            "description": "quam quo molestiae",
            "price": "$854.00"
          },
          {
            "id": "08",
            "category": "odit",
            "name": "incidunt",
            "description": "iusto corrupti qui",
            "price": "$163.00"
          },
          {
            "id": "09",
            "category": "odit",
            "name": "dolor",
            "description": "iste dolorem occaecati",
            "price": "$73.00"
          },
          {
            "id": "010",
            "category": "odit",
            "name": "praesentium",
            "description": "voluptatem vel perspiciatis",
            "price": "$685.00"
          },
          {
            "id": "11",
            "category": "numquam",
            "name": "velit",
            "description": "reprehenderit mollitia quis",
            "price": "$159.00"
          },
          {
            "id": "12",
            "category": "numquam",
            "name": "tempore",
            "description": "tempore sit dolorem",
            "price": "$350.00"
          },
          {
            "id": "13",
            "category": "numquam",
            "name": "optio",
            "description": "praesentium iusto officiis",
            "price": "$96.00"
          },
          {
            "id": "14",
            "category": "numquam",
            "name": "aspernatur",
            "description": "et consequatur rerum",
            "price": "$373.00"
          },
          {
            "id": "15",
            "category": "numquam",
            "name": "eum",
            "description": "nihil est id",
            "price": "$178.00"
          },
          {
            "id": "16",
            "category": "numquam",
            "name": "minima",
            "description": "necessitatibus ipsam dolore",
            "price": "$534.00"
          },
          {
            "id": "21",
            "category": "blanditiis",
            "name": "sunt",
            "description": "sunt voluptatem velit",
            "price": "$128.00"
          },
          {
            "id": "22",
            "category": "blanditiis",
            "name": "consequatur",
            "description": "in consequatur omnis",
            "price": "$776.00"
          },
          {
            "id": "23",
            "category": "blanditiis",
            "name": "debitis",
            "description": "corporis ullam expedita",
            "price": "$801.00"
          },
          {
            "id": "24",
            "category": "blanditiis",
            "name": "ad",
            "description": "doloremque non eum",
            "price": "$557.00"
          },
          {
            "id": "25",
            "category": "blanditiis",
            "name": "veritatis",
            "description": "animi porro beatae",
            "price": "$976.00"
          },
          {
            "id": "26",
            "category": "blanditiis",
            "name": "cumque",
            "description": "voluptatem quos voluptatem",
            "price": "$273.00"
          },
          {
            "id": "27",
            "category": "blanditiis",
            "name": "sint",
            "description": "dicta officia ut",
            "price": "$93.00"
          },
          {
            "id": "28",
            "category": "blanditiis",
            "name": "quia",
            "description": "cum ratione exercitationem",
            "price": "$504.00"
          },
          {
            "id": "29",
            "category": "blanditiis",
            "name": "porro",
            "description": "ab quod dolor",
            "price": "$891.00"
          },
          {
            "id": "31",
            "category": "eius",
            "name": "eius",
            "description": "at quia eos",
            "price": "$479.00"
          },
          {
            "id": "32",
            "category": "eius",
            "name": "sunt",
            "description": "quod omnis delectus",
            "price": "$808.00"
          },
          {
            "id": "33",
            "category": "eius",
            "name": "inventore",
            "description": "sint maiores dolor",
            "price": "$599.00"
          },
          {
            "id": "34",
            "category": "eius",
            "name": "voluptatem",
            "description": "veritatis fugit dicta",
            "price": "$350.00"
          },
          {
            "id": "35",
            "category": "eius",
            "name": "dolorem",
            "description": "aliquam sint voluptatum",
            "price": "$784.00"
          },
          {
            "id": "36",
            "category": "eius",
            "name": "possimus",
            "description": "ex accusamus aut",
            "price": "$50.00"
          },
          {
            "id": "37",
            "category": "eius",
            "name": "dignissimos",
            "description": "recusandae assumenda natus",
            "price": "$681.00"
          }
        ]
      },
      {
        "name": "quo",
        "categories": ["magnam", "rerum"],
        "items": [
          {
            "id": "01",
            "category": "magnam",
            "name": "nulla",
            "description": "modi et aliquam",
            "price": "$865.00"
          },
          {
            "id": "02",
            "category": "magnam",
            "name": "vitae",
            "description": "sint voluptas maxime",
            "price": "$290.00"
          },
          {
            "id": "03",
            "category": "magnam",
            "name": "sapiente",
            "description": "repellendus repellendus tenetur",
            "price": "$743.00"
          },
          {
            "id": "04",
            "category": "magnam",
            "name": "optio",
            "description": "consectetur ipsam assumenda",
            "price": "$539.00"
          },
          {
            "id": "05",
            "category": "magnam",
            "name": "qui",
            "description": "inventore ut quis",
            "price": "$849.00"
          },
          {
            "id": "06",
            "category": "magnam",
            "name": "eos",
            "description": "maxime dolore voluptatem",
            "price": "$976.00"
          },
          {
            "id": "07",
            "category": "magnam",
            "name": "totam",
            "description": "voluptate veritatis consequuntur",
            "price": "$990.00"
          },
          {
            "id": "11",
            "category": "rerum",
            "name": "nulla",
            "description": "ipsam sed rerum",
            "price": "$680.00"
          },
          {
            "id": "12",
            "category": "rerum",
            "name": "praesentium",
            "description": "consequatur quibusdam deleniti",
            "price": "$868.00"
          },
          {
            "id": "13",
            "category": "rerum",
            "name": "rem",
            "description": "et quaerat in",
            "price": "$974.00"
          },
          {
            "id": "14",
            "category": "rerum",
            "name": "consequatur",
            "description": "qui placeat quo",
            "price": "$488.00"
          },
          {
            "id": "15",
            "category": "rerum",
            "name": "quibusdam",
            "description": "dolores a est",
            "price": "$119.00"
          },
          {
            "id": "16",
            "category": "rerum",
            "name": "nam",
            "description": "dicta saepe autem",
            "price": "$234.00"
          }
        ]
      },
      {
        "name": "rerum",
        "categories": ["est", "soluta", "excepturi", "porro"],
        "items": [
          {
            "id": "01",
            "category": "est",
            "name": "sunt",
            "description": "voluptates ad aspernatur",
            "price": "$643.00"
          },
          {
            "id": "02",
            "category": "est",
            "name": "eligendi",
            "description": "pariatur numquam odit",
            "price": "$665.00"
          },
          {
            "id": "03",
            "category": "est",
            "name": "debitis",
            "description": "nihil minima delectus",
            "price": "$870.00"
          },
          {
            "id": "04",
            "category": "est",
            "name": "illum",
            "description": "minima voluptas officiis",
            "price": "$929.00"
          },
          {
            "id": "05",
            "category": "est",
            "name": "eius",
            "description": "quidem eum est",
            "price": "$657.00"
          },
          {
            "id": "06",
            "category": "est",
            "name": "necessitatibus",
            "description": "non aut commodi",
            "price": "$159.00"
          },
          {
            "id": "07",
            "category": "est",
            "name": "quia",
            "description": "perspiciatis quaerat qui",
            "price": "$674.00"
          },
          {
            "id": "08",
            "category": "est",
            "name": "assumenda",
            "description": "ipsa repellendus laboriosam",
            "price": "$100.00"
          },
          {
            "id": "09",
            "category": "est",
            "name": "illo",
            "description": "iure inventore dolorem",
            "price": "$900.00"
          },
          {
            "id": "010",
            "category": "est",
            "name": "aut",
            "description": "corporis neque sapiente",
            "price": "$193.00"
          },
          {
            "id": "11",
            "category": "soluta",
            "name": "et",
            "description": "voluptas voluptas et",
            "price": "$313.00"
          },
          {
            "id": "12",
            "category": "soluta",
            "name": "nam",
            "description": "id provident laborum",
            "price": "$605.00"
          },
          {
            "id": "13",
            "category": "soluta",
            "name": "alias",
            "description": "voluptatem veniam illum",
            "price": "$464.00"
          },
          {
            "id": "14",
            "category": "soluta",
            "name": "quia",
            "description": "mollitia ut voluptatem",
            "price": "$680.00"
          },
          {
            "id": "15",
            "category": "soluta",
            "name": "amet",
            "description": "sunt voluptas ut",
            "price": "$17.00"
          },
          {
            "id": "16",
            "category": "soluta",
            "name": "officia",
            "description": "voluptas et beatae",
            "price": "$513.00"
          },
          {
            "id": "17",
            "category": "soluta",
            "name": "qui",
            "description": "sint possimus non",
            "price": "$448.00"
          },
          {
            "id": "18",
            "category": "soluta",
            "name": "quo",
            "description": "est omnis possimus",
            "price": "$944.00"
          },
          {
            "id": "19",
            "category": "soluta",
            "name": "consequatur",
            "description": "voluptatem possimus sapiente",
            "price": "$439.00"
          },
          {
            "id": "110",
            "category": "soluta",
            "name": "officia",
            "description": "non nemo autem",
            "price": "$311.00"
          },
          {
            "id": "21",
            "category": "excepturi",
            "name": "sit",
            "description": "omnis reiciendis ut",
            "price": "$516.00"
          },
          {
            "id": "22",
            "category": "excepturi",
            "name": "omnis",
            "description": "vel debitis et",
            "price": "$964.00"
          },
          {
            "id": "23",
            "category": "excepturi",
            "name": "molestias",
            "description": "nihil provident aut",
            "price": "$896.00"
          },
          {
            "id": "24",
            "category": "excepturi",
            "name": "sit",
            "description": "aspernatur voluptatibus voluptatum",
            "price": "$229.00"
          },
          {
            "id": "25",
            "category": "excepturi",
            "name": "numquam",
            "description": "est molestiae et",
            "price": "$349.00"
          },
          {
            "id": "26",
            "category": "excepturi",
            "name": "nam",
            "description": "rerum quam iure",
            "price": "$487.00"
          },
          {
            "id": "27",
            "category": "excepturi",
            "name": "expedita",
            "description": "ipsam eius ut",
            "price": "$474.00"
          },
          {
            "id": "31",
            "category": "porro",
            "name": "accusantium",
            "description": "aut itaque voluptates",
            "price": "$420.00"
          },
          {
            "id": "32",
            "category": "porro",
            "name": "eum",
            "description": "nulla eum quis",
            "price": "$430.00"
          },
          {
            "id": "33",
            "category": "porro",
            "name": "tenetur",
            "description": "aut distinctio esse",
            "price": "$107.00"
          },
          {
            "id": "34",
            "category": "porro",
            "name": "laborum",
            "description": "exercitationem sed saepe",
            "price": "$533.00"
          },
          {
            "id": "35",
            "category": "porro",
            "name": "voluptatem",
            "description": "sunt ut sit",
            "price": "$239.00"
          },
          {
            "id": "36",
            "category": "porro",
            "name": "voluptatibus",
            "description": "aut animi ipsam",
            "price": "$714.00"
          }
        ]
      }
    ]
  }
]