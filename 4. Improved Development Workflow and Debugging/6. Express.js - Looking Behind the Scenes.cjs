/*
What i do??
      --> view library on github
*/

const express =require('express');
const app=express();

app.use((req,res,next)=>{
       console.log("In the Middlewere");
       next();

});

app.use((req,res,next)=>{
       console.log("In anotjher Middlewere");
       res.send('<h1> Hello from Express! </h1>');


});



app.listen(3000);