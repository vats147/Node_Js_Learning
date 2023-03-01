/*
What i do??
       === refrence file app.js //all req,res is routing
    --> how to use routing 
*/

const fs=require("fs");

const requestHandler = (req,res)=>{

       const url=req.url;
       const method=req.method;
       if(url==='/')
       {
              res.write('<html> <body> <form action="/message" method="POST" > <input type="text" name="message" > <button type="submit">Submit </button> </form></body></html>');
              return res.end();
       }

       if(url==='/message' && method==="POST")
       {
              const body=[];
              req.on('data',(chunk)=>{
                     console.log(chunk);
                     body.push(chunk);
              });
              req.on('end',()=>{
                     const parsedBody=Buffer.concat(body).toString();
                     const messgae=parsedBody.split('=')[1];
                     console.log(parsedBody);
                     fs.writeFileSync('message.txt',messgae);
              });

              res.statusCode=302;
              res.setHeader('Location','/');
              return res.end();
       }
      
      //use response object
      
      res.setHeader('Content-Type','text/html');
      res.write("<html> <body> <h1>Hello World</h1></body></html>");
      res.end();

      
};
//--> how to exports module

// module.exports=requestHandler

// module.exports={
//        handler:requestHandler,
//        someText:"hello world"
// };

// module.exports.handler=requestHandler;
// module.exports.someText="Some Hard code text";


exports.handler=requestHandler;
exports.someText="Some Hard code text";
