const express = require('express')

const path = require('path');

const db = require('./dbconnection')

const bodyParser = require('body-parser') 

const users = require('./users')

const app = express()

const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));

app.use(bodyParser.json());

app.set('view engine', 'ejs')

app.set('views', './views')
    
app.get('/', (req,res) => 

res.render('view'));

app.use('/users', users)

app.listen(port)