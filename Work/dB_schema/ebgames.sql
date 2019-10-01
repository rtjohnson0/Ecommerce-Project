DROP DATABASE IF EXISTS ebgames_db;
CREATE DATABASE ebgames_db;

USE ebgames_db;

CREATE TABLE Products(product_id INT AUTO_INCREMENT NOT NULL,
product_name VARCHAR(100) NOT NULL,
stock_quantity INT(10) NOT NULL,
URL VARCHAR(255) NOT NULL,
des_box VARCHAR(255) NOT NULL,
categories VARCHAR(255) NOT NULL,
PRIMARY KEY (product_id)
);
CREATE TABLE Price(product_id INT AUTO_INCREMENT NOT NULL,
price DECIMAL(10,2) NOT NULL,
currency CHAR(3) NOT NULL,
discounts DECIMAL(10,2),
PRIMARY KEY (product_id)
);
CREATE TABLE Orders(order_id INT AUTO_INCREMENT NOT NULL,
product_id INT  NOT NULL,
customer_id INT NOT NULL,
order_date TIMESTAMP NOT NULL,
PRIMARY KEY (order_id)
);

CREATE TABLE Customers(customer_id INT AUTO_INCREMENT NOT NULL,
firstName VARCHAR(100) NOT NULL,
lastName VARCHAR(100) NOT NULL,
email VARCHAR(255) NOT NULL,
address VARCHAR(255) NOT NULL,
state CHAR(2) NOT NULL,
zip INT NOT NULL,
PRIMARY KEY (customer_id)
);
CREATE TABLE Contacts(contact_id INT AUTO_INCREMENT NOT NULL,
customer_id INT,
firstName VARCHAR(100) NOT NULL,
lastName VARCHAR(100) NOT NULL,
email VARCHAR(255) NOT NULL,
address VARCHAR(255) NOT NULL,
state CHAR(2) NOT NULL,
zip INT NOT NULL,
PRIMARY KEY (contact_id)
);
INSERT INTO Products 
(product_name,stock_quantity,url,des_box,categories)
VALUES('Xbox 1', 125,'https://pmcvariety.files.wordpress.com/2018/06/xbox-one-x_console-controller_fronttilt-top.jpg?w=1000&h=563&crop=1','The Xbox One is an eighth-generation home video game console that was developed by Microsoft.','System'),
('Playstation 4', 100,"https://i.ytimg.com/vi/YQUpg795iBo/maxresdefault.jpg",'"The PlayStation 4 (PS4) is a home video game console developed by Sony Interactive Entertainment.','System'),
('Madden 20', 300,'https://images.performgroup.com/di/library/sporting_news/44/d3/madden-nfl-20-patrick-mahomes_1rtvl1rtb15rv1m0btr8iisu2u.jpg?t=1450601490&quality=100','Madden NFL 20 is an American football video game based on the NFL! Release:08/20/2019 (Xbox,PS4,PC)','Sports'),
('NBA 2K20', 1000,'https://hb.imgix.net/52455316a106ec59b3834d0ae7021fef77c1fb63.jpg?auto=compress,format&fit=crop&h=353&w=616&s=524457696ac321b7c5de2381dc729c77','NBA2K20 is a basketball video game developed by 2K Sports Release:09/05/2019|(Xbox,PS4,PC)','Sports'),
('Life is Strange 2', 40,'https://hb.imgix.net/2c124883a584ac9098af11192c1f3b53197ee9d7.jpg?auto=compress,format&fit=crop&h=353&w=616&s=eb42c2bb960e40e52b7d7f82c3ce9d6e','Life Is Strange 2 is an episodic graphic adventure video game developed by Dontnod Entertainment.(Xbox,PS4,PC)','Shooters'),
('Star Wars Jedi: Fallen Order', 20,'https://media.playstation.com/is/image/SCEA/star-wars-jedi-fallen-order-square-art-01-ps4-us-29may19?$native_nt$','Star Wars Jedi: Fallen Order is a single-player action video game developed by EA Release:11/19/2019(Xbox,PS4,PC)','Shooters'),
('Call Of Duty: Modern Warfare', 4500,'https://9to5toys.com/wp-content/uploads/sites/5/2019/05/Call-of-Duty-Modern-Warfare-2019-1.jpg?quality=82&strip=all&w=1600','Call of Duty: Modern Warfare is a first-person shooter developed by Infinity Ward Release:10/25/19 (Xbox,PS4,PC)','Shooters'),
('NHL 20', 3000,'https://www.trueachievements.com/customimages/095973.jpg','NHL 20 is a ice hockey video game developed by EA Sports Release:09/13/2019 (Xbox,PS4,PC)','Sports'),
('Fifa 20', 10000,'http://images.nintendolife.com/5c238196f2058/cr7.original.jpg','Upcoming sports game Fifa 20! Will be releasing at the beginning of fall! Release:09/27/2019 (Xbox, PS4, PC)','Sports'),
('Borderlands 3', 550,'https://images5.alphacoders.com/100/thumb-1920-1004495.jpg','First-person shooter developed by Gearbox Software,| Release:09/13/2019|(Xbox,PS4,PC)','Shooters'),
('Ghost Recon: BreakPoint', 999,'https://i.redd.it/q0835el2oox21.jpg','Upcoming online tactical shooter video game developed by Ubisoft. |Release:10/05/19|(Xbox,PS4,PC)','Shooters'),
('Nintendo Switch', 30,'https://www.bigw.com.au/medias/sys_master/images/images/h39/h87/12705424015390.png','The Nintendo Switch is a console. Its a hybrid console that can be used as a stationary & portable device.','System');
INSERT INTO Price 
(price,currency)
VALUES(179.99, 'USD'),
(189.99, 'USD'),
(59.99, 'USD'),
(59.99, 'USD'),
(59.99, 'USD'),
(59.99, 'USD'),
(59.99, 'USD'),
(59.99, 'USD'),
(59.99, 'USD'),
(59.99, 'USD'),
(59.99, 'USD'),
(279.99, 'USD');

INSERT INTO Contacts 
(firstName,lastName,email,address,state,zip)
VALUES('Reggie', 'Johnson','reggie1997@hotmail.com','5555 Oregon Lane','NC',20695),
('Braxton', 'Jackson','BJax95@gmail.com','4024 Washington Place','SC',28455),
('Leonard', 'Vicipio','lVicipio2325@yahoo.com','202 Flamingo Pink','NC',40325),
('Kwame', 'Brown','ImALaker33@gmail.com','4200 Los Angeles','CA',34535),
('Bruce', 'Banner','theHulkInEndGame@yahoo.com','3333 Thomas Place','MD',22234),
('Kevin', 'Garnett','ImACeltic5@gmail.com','2827 Patriots Pl','MA',82732),
('Victor', 'Oladipo','IndianaPacer2@yahoo.com','7340 Porsche Alley','MI',45205),
('Lebron', 'James','TacoTuesday@yahoo.com','6320 GOAT City','CA',53275),
('Klay', 'Thompson','KThompson0@warriors.com','3333 Three Lane','CA',18504),
('Gordon', 'Ramsey','GRamsey23@aol.com','5020 Oregon Lane','NC',20695);

 SELECT Price.product_id,Products.product_name,Products.stock_quantity,Price.price,Products.des_box,Products.categories FROM Price INNER JOIN Products ON Price.product_id = Products.product_id
GROUP BY product_id;

-- SELECT * FROM Contacts;

-- SELECT URL FROM Products