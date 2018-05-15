
DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon_DB;
USE bamazon_DB;



CREATE TABLE products(
    item_id INTEGER(10) AUTO_INCREMENT NOT NULL,
    product_name VARCHAR(30) NOT NULL,
    department_name VARCHAR(20),
    price DECIMAL (10,2) NOT NULL,
    stock_quantity INTEGER(11) NOT NULL,
    PRIMARY KEY (item_id)
);





insert into products (product_name, department_name, price, stock_quantity)
values
	("Child Pancho Costume", "Costumes", 25.99, 10),
    ("Child Sombrero", "Costumes", 6.71, 90),
    ("Document Poster Tube", "Office", 25.99, 400),
    ("16 GB Flash Drive", "Electronics", 9.17, 1000),
    ("Motion Sensor Toilet Light", "Electronics", 15.90, 100),
    ("Fidget Spinner", "Toys", 7.99, 350),
    ("No Soliciting Sign", "Office", 6.49, 250),
    ("USB-C to Lightning Cable", "Electronics", 10.49, 200),
    ("Eloquent JavaScript", "Books", 25.15, 1500),
    ("Cascadia T-Shirt", "Clothing", 19.99, 50);





