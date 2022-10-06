const express = require("express");
const path = require('path');
const fs = require('fs');
const app = express();
const port = 80;
// Express SPECIFIC STUFF
app.use('/static',express.static('static'));//for serving static files
app.use(express.urlencoded());// Helps to get data  from post

// PUG SPECIFIC STUFF
app.set('view engine', 'pug');//Set the template engine as pug
app.set('views',path.join(__dirname,'views'));//Set the view directory

//ENDPOINTS
app.get('/',(req,res)=>{
    const con = "This is the best content on the internet so use it wisely"
    const params = {'title' : 'PubG is a game',"content" : con}
    res.status(200).render('index.pug',params);
})
app.post('/',(req,res)=>{
    // console.log(req.body)
    names = req.body.names
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more
    let outputToWrite = `the name of  client ${names} ${age} years old ${gender} residing at ${address}, more about personmore`


    fs.writeFileSync('output.txt', outputToWrite)
    const params = {'message' : 'Your form has been submitted succesfully'}
    res.status(200).render('index.pug',params);

})

//Our pug demo end point
// app.get('/demo', function (req, res) {
//     res.status(200).render('demo', { title: 'Hey Aman', message: 'Hello there! using pug' })
//   })

// app.get("/",(req,res)=>{
//     res.send("This is home page my first express app");
// });
// app.get("/about",(req,res)=>{
//     res.send("This is about page of my first express app");
// });
// app.post("/about",(req,res)=>{
//     res.send("This is about post req page of my first express app");
// });
// app.get("/this",(req,res)=>{
//     res.status(404).send("Not found");
// });
//START THE SERVER
app.listen(port,()=>{
    console.log(`This application stated specify on port ${port}`)
});
