var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var mongoose = require('mongoose');

var config = require('./config');
const router = require('./route');

var app = express();

app.use(cors());
app.use(bodyParser());

mongoose.connect(config.mongoUrl);

mongoose.connection.on("connected", ()=> {
    console.log("MongoDB Connected to the port of 27017");
});

mongoose.connection.on("error", (err)=> {
    if(err) {
        console.log("Error while connecting mongoDB");
    } else {
        console.log("Connected");
    }
});

app.use('/api', router);

app.listen(config.port, ()=> {
    console.log("Connected the Node server at port: " + config.port);
});