const mysql = require('mysql')
const router = require("express").Router();
var connection = mysql.createConnection({
  host: process.env.LOCALHOST,
  port: process.env.HOST,

  // Your username
  user: 'root',

  // Your password
  password: process.env.MYPASSWORD,
  database: process.env.DATABASE
})
// created a query that will return all the columns needed to be mapped through on the products.js page. This will also put them in order by product.id then be sent to the page by the api path
router.get('/products', (req, res) => {

  connection.query('SELECT Price.product_id,Products.product_name,Products.stock_quantity,Price.price,Products.URL,Products.des_box,Products.categories FROM Price INNER JOIN Products ON Price.product_id = Products.product_id GROUP BY product_id;', function (err, data) {
    if (err) {
      throw err


    }
    res.send(data)
    console.log(err)
  })
})

// created a query that will return all the columns needed to be mapped through on the products.js page by the category requested from the user. This will also put them in order by product.id then be sent to the page by the api path
router.get('/products/:query', (req, res) => {


  let item = req.params.query
  console.log(item)
  connection.query('SELECT Price.product_id,Products.product_name,Products.stock_quantity,Price.price,Products.URL,Products.des_box,Products.categories FROM Price INNER JOIN Products ON Price.product_id = Products.product_id WHERE Products.categories = ? GROUP BY product_id;', [item], function (err, data) {
    if (err) {
      throw err
    }
    res.send(data)
    console.log(`data`, data)
  })


})

// Created a query that will give you all the information about all the people signed up for the website
router.get('/contacts', (req, res) => {



  connection.query('SELECT * FROM Contacts', function (err, rows, fields) {
    if (err) {
      throw err

    } res.json(rows)
  })

})
// Created a query that will grab the necessary columns to be mapped through the cards set on the products.js page. This will set the price from high to low when the button is clicked
router.get('/productFilter/High', (req, res) => {

  connection.query('SELECT Price.product_id,Products.product_name,Products.stock_quantity,Price.price,Products.URL,Products.des_box,Products.categories FROM Price INNER JOIN Products ON Price.product_id = Products.product_id GROUP BY product_id ORDER BY Price.price DESC;', function (err, data) {
    if (err) throw err;
    res.json(data)
    console.log(data)
  })
})
// Created a query that will grab the necessary columns to be mapped through the cards set on the products.js page. This will set the price from low to high when the button is clicked
router.get('/productFilter/Low', (req, res) => {

  connection.query('SELECT Price.product_id,Products.product_name,Products.stock_quantity,Price.price,Products.URL,Products.des_box,Products.categories FROM Price INNER JOIN Products ON Price.product_id = Products.product_id GROUP BY product_id ORDER BY Price.price ASC;', function (err, data) {
    if (err) throw err;
    res.json(data)
    console.log(data)
  })
})

router.post('/newcontact', (req, res) => {
  let firstName = req.body.firstName
  let lastName = req.body.lastName
  let email = req.body.email
  let address = req.body.address
  let state = req.body.state
  let zip = req.body.zip
  connection.query('INSERT INTO Contacts (firstName,lastName,email,address,state,zip) VALUES(?, ?, ?, ?,?,?)', [firstName, lastName, email, address, state, zip], (err, data) => {

    if (err) {
      throw err
    }

    console.log(req.body)
    console.log(data)
    res.send(data)

  })


})
module.exports = router
