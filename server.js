const express = require('express');
const morgan = require('morgan')
const app = express();
const helmet = require('helmet')
const cors = require('cors')
const mysql = require('mysql')
require('dotenv').config()
var router = require('../product-react-project/Routes/apiRoutes')
var contact = require('../product-react-project/Routes/contactRoutes')

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())
app.use(helmet.noCache())
app.use(helmet.frameguard())
morgan(function(tokens, req, res){ return 'some format string' })
morgan({ format: 'dev', skip: function(req, res){ return res.statusCode === 304; }})

app.use('/api', router)
app.use('/api', contact)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/home.html"));
});


/*app.get('/products', (req,res) => {
    var connection = mysql.createConnection({
      host: 'localhost',
      port: 3306,
    
      // Your username
      user: 'root',
    
      // Your password
      password: process.env.MYPASSWORD,
      database: 'ebgames_db'
      })
      
      
      connection.connect()
      
      connection.query('SELECT * FROM Products', function (err, rows, fields) {
        if (err){ throw err
      
        } res.json(rows)
      })
      
      
    
})
app.get('/contacts', (req,res) => {
  var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Your password
    password: process.env.MYPASSWORD,
    database: 'ebgames_db'
    })
    
    
    connection.connect()
    
    connection.query('SELECT * FROM Contacts', function (err, rows, fields) {
      if (err){ throw err
    
      } res.json(rows)
    })
    
    
  
})
app.get('/productfilter/:query', (req,res) => {
  var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,
  
    // Your username
    user: 'root',
  
    // Your password
    password: process.env.MYPASSWORD,
    database: 'ebgames_db'
    })
    
    
    connection.connect()
    
        let item = req.params.query
        connection.query("SELECT * FROM Products WHERE product_id = ?", [item], function(err, data){    
          res.json(data)  
          console.log(data)
        })  
    
   
   
    
   
  
})

app.get('/', (req,res) => {
  
})
*/

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
 })
