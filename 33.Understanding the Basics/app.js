const http=require('http');


// it create server method and returnserver
const server=http.createServer(function(req,res){
       console.log(req);
});


server.listen(3000);