/*
What i do??
      --> How to handle route and middle ware 
*/

const express =require('express');

const app=express();

app.use();

app.use('/app-product',(req,res,next)=>{
       console.log("In the Middlewere");
       res.send('<form action="/product" method="POST"> <input type="text" name="title"><button type="submit">Add Product</button></form>');
 });

 app.use('/product',(req,res,next)=>{
       console.log(req.body);
       res.redirect('/');
 });
app.use('/',(req,res,next)=>{
       console.log("In hello Middlewere");
       res.send("<h1> Hello world </h1>");
});

app.listen(3000);