const express = require('express')
var expressLayouts = require('express-ejs-layouts');


const app = express()
const PORT = 3000 || process.env.PORT
require('dotenv').config()

app.set('view engine', 'ejs');
app.use(expressLayouts);

app.use(express.urlencoded({ extended: true }))

// static folder 
app.use(express.static('public'))

// laytou folder
// app.set('layout', 'layouts/layout');// docs
app.set('layout', './layouts/main'); // tutorial

const routes = require('./server/routes/recipeRoutes.js')
app.use('/', routes)


app.get('/', (req, res) => {

  res.send('Hello World!')
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})