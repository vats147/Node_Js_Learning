/*
What i do??
      --> how to use middleware 
      -->next(); // Allows the request to continue to the next middleware in line
*/

const express =require('express');
const http=require('http');
const app=express();

app.use((req,res,next)=>{
       console.log("In the Middlewere");
       next();

});

app.use((req,res,next)=>{
       console.log("In anotjher Middlewere");


});

const server=http.createServer(app);

server.listen(3000);