/*
What i do??
      --> send a response to the request res.send();
      --> default header type is text/html
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
       res.send('<h1> Hello from Express! </h1>');


});

const server=http.createServer(app);

server.listen(3000);