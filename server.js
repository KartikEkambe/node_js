const express = require('express')
const app = express()
const db = require('./db');
const bodyParser = require('body-parser');
const menuItem = require('./model/Menu');
app.use(bodyParser.json());


app.get('/', function (req, res) {
  res.send('Welcome to our hotel ')
})







// Import the router files
const personRoutes=require('./routes/personRoutes')
// Use the routers
app.use('/person',personRoutes);


const menuRoutes=require('./routes/menuRoutes');
app.use('/menu',menuRoutes);

app.listen(3000, () => { console.log('Listning on port 3000'); });