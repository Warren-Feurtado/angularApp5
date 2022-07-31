const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const studentRoute = require('./routes/student-route');
const bankingRoute = require('./routes/bankDetails-route');

//Mongoose Connection setup
mongoose.connect('mongodb://127.0.0.1:27017/students')
.then((x) => {
    console.log(`Connected to MongoDB Successfully! Database name: "${x.connections[0].name}"`)
})
.catch((err) => {
    console.error('Error connecting to MongoDB', err.reason)
});

//Express App 
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

//Set Route Middleware
app.use('/students', studentRoute);
app.use('/bank-info', bankingRoute);

const port = process.env.PORT || 4000;
const server = app.listen(port, () => console.log(`Listen on port ${port}..`));

