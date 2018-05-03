
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



INSERT INTO products(product_name, department_name, price, stock_quantity)
VALUES 
    ("PS4", "Video Games", 299.99, 100),
    ("God of War", "Video Games", 59.99, 200),
    ("echo(second gen)", "Electronics" 99.9, 60),
    ("Bose SoundSport Wirless Headphones", "Electronics", 149.00, 35),
    ("Jenga", "Toys and Games", 9.99, 160),
    ("Connect 4", "Toys and Games", 8.79, 100),
    ("On the Road", "Books", 10.88, 120),
    ("The Oracle Year: A Novel", "Books", 13.19, 250),
    ("Bocce ball set", "Sports and Fitness", 33.99, 25),
    ("Washers Toss Game", "Sports and Fitness", 49.99, 55);









