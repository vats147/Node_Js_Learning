const express=require('express');
const bodyParser=require('body-parser');
const path=require('path');
const adminRoutes=require('./routes/admin');
const shopRoutes=require('./routes/shop');

const app=express();

app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname,'public')));

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{

       res.statusCode=404;
       res.sendFile(path.join(__dirname,'views','404.html'));
      
       
});


app.listen(3000);
