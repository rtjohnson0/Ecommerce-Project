DROP DATABASE IF EXISTS ebgames_db;
CREATE DATABASE ebgames_db;

USE ebgames_db;

CREATE TABLE Products(product_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NOT NULL,
stock_quantity INT(10) NOT NULL,
primary key (product_id)
);