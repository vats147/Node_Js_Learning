const http=require('http');

const route=require('./15. Using the Node Modules System');

console.log(route.someText);
const servers=http.createServer(route.handler);

servers.listen(3000);