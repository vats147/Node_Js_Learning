/*
What i do??
      --> add 404 page method
*/

const express =require('express');

const adminRoutes=require('./routes/admin.cjs');
const shopRoutes=require('./routes/shop.cjs');
const bodyParser=require('body-parser');
const path=require('path');
const app=express();

app.use(bodyParser.urlencoded({extended:false}))
app.use(express.static(path.join(__dirname,'util')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);


app.use((req,res,next)=>{
      res.status(404).sendFile(path.join(__dirname,'views','404.html'));
      console.log("Not found");
       //res.status(404).send('<h1> Page not found  </h1> ');
       //res.end();
})
app.listen(3000);