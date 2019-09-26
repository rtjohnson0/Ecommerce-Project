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

router.get('/contacts', (req,res) => {
  
    
    
    // connection.connect()
    
    connection.query('SELECT * FROM Contacts', function (err, data) {
      if (err){ throw err 
      
    
      } res.send(data)
      console.log(err)
    })
    
    
    
  
})
module.exports = router;
