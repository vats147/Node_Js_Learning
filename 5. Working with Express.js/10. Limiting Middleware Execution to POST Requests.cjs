/*
What i do??
      -->  use app.post for handling post request
*/

const express =require('express');

const app=express();


app.use('/app-product',(req,res,next)=>{
       console.log("In the Middlewere");
       res.send('<form action="/product" method="POST"> <input type="text" name="title"><button type="submit">Add Product</button></form>');
 });

app.post('/product',(req,res,next)=>{
       console.log("Inside post reques");
       console.log(req.body);
       res.redirect('/');
});
app.use('/',(req,res,next)=>{
       console.log("In hello Middlewere");
       res.send("<h1> Hello world </h1>");
});

app.listen(3000);