const mysql = require('mysql')
const router = require("express").Router();
var connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,

  // Your username
  user: 'root',

  // Your password
  password: process.env.MYPASSWORD,
  database: 'ebgames_db'
  })

router.get('/products', (req,res) => {
  
    
    
    // connection.connect()
    
    connection.query('SELECT Price.product_id,Products.product_name,Products.stock_quantity,Price.price,Products.URL,Products.des_box FROM Price INNER JOIN Products ON Price.product_id = Products.product_id GROUP BY product_id;', function (err, data) {
      if (err){ throw err 
      
    
      } res.send(data)
      console.log(err)
    })
    
    
    
  
})



module.exports = router;
