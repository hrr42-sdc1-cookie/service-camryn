CREATE DATABASE openT;

USE openT;

CREATE TABLE restaurants (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name varchar(100)
);

CREATE TABLE menus (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name varchar(100),
  restaurantId INT NOT NULL
);

CREATE TABLE categories (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name varchar(100),
  menuId INT NOT NULL,
  restaurantId INT NOT NULL
);

CREATE TABLE items (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name varchar(100) NOT NULL,
  description varchar(300),
  price varchar(10),
  categoryId INT NOT NULL,
  menuId INT NOT NULL,
  restaurantId INT NOT NULL
);