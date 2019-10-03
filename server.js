const express = require('express');
const morgan = require('morgan')
const path = require('path')
const app = express();
const helmet = require('helmet')
require('dotenv').config()
var router = require('../product-react-project/Routes/apiRoutes')


app.use(express.json()); // turns my app into a json 
app.use(helmet()) // provides security for the server-- helmet adds on to your headers for more security
app.use(morgan()) // creates a log and a default format
app.use("/api", router); // utilize my router to be able to grab information and post it on the page.


app.get("*", function (req, res) {
  res.sendFile(path.join(__dirname, "./Client/public/index.html"));
}); // this helps with a cross origin error, which allows resticted resources on a web page.

//creating a port for my server to run on 8080
const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
})
