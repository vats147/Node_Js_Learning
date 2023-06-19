const http=require('http');
const fs=require('fs');

// it create server method and returnserver
const server=http.createServer(function(req,res){
       const url=req.url;
       const method=req.method;
       if(url==='/')
       {
              res.write("<html>");
              res.write("<body>");
              res.write('<form action="/message" method="POST" > <input type="text" ><button type="submit">submit</button>')
              res.write("</body>");
              res.write("</html>");
              return res.end();
       }
       if(url==='/message'&&method==='POST')
       {
              fs.writeFileSync('message.txt','DUMMY');
              // res.writeHead(302,{});
              res.statusCode=302;
              res.setHeader('Location','/');
              return res.end();
              
       }
       console.log(req.url, req.method, req.headers);
       res.setHeader('Content-Type','text/html');
       
       res.end();
       

});


server.listen(3000);