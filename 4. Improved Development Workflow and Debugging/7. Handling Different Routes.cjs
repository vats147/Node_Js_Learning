/*
What i do??
      --> How to handle route and middle ware 
*/

const express =require('express');

const app=express();

// app.use('/',(req,res,next)=>{
//        console.log("This will always runs!!!");
//        next();
// });
app.use('/app-product',(req,res,next)=>{
       console.log("In the Middlewere");
       res.send("<h1> Hello kasdnaj </h1>");
});

app.use('/',(req,res,next)=>{
       console.log("In hello Middlewere");
       res.send("<h1> Hello world </h1>");
});

app.listen(3000);