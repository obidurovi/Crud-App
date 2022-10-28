// imports 
const dotenv = require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const colors = require('colors');
const expressLayouts = require('express-ejs-layouts');
const mongoConnection = require('./config/database');
const testRoute = require('./routes/route');


// import express
const app = express();

// Init Environment
const PORT = process.env.PORT || 4000


// Express Middlewares
app.use(express.json());
app.use(express.urlencoded( {extended : false} ));

// Static Folder 
app.use(express.static('public'));

// Set Template Engine
app.set('view engine', 'ejs')
app.use(expressLayouts);
app.set('layout', 'layout/app')

// Routes
app.use(testRoute);


// Create Server 
app.listen(PORT, () => {
    mongoConnection();
    console.log(`Server Is Running on Port ${ PORT }`.green);
})