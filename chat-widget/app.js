/**
 * Created by kyungmi on 2017-08-19.
 */
//app.js
var express = require('express');
var app = express(),
    server = require('http').createServer(app);
server.listen(3000);
var path = require("path");

app.get('/',function(req, res){
    res.sendFile(__dirname+'/index_cardboard.html');
});

app.use(express.static(path.join(__dirname, '/')));