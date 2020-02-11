const express = require("express");
const app = express();
const port = 3000;
//the fist parameter defines your route,this is a call back function
app.get('/', function (req, res) {
    res.send("<h1>Hello World</h1>");
});

app.get('/about',function(req,res){
    res.send("I am a software Engineer");
});

app.get('/about',function(req,res){
    res.send("I am a software Engineer");
});

app.get('/hobbies',function(req,res){
    res.send("<ul><li>Table Tennis</li><li>Reading</li><li>Football</li></ul>")
})

app.listen(port, function () {
    console.log("Listening to the port number 3000");
});