/*
What i do??
      -->  use app.post for handling post request
*/


const express=require('express');
const path=require('path');
const router = express.Router();
const app=express();
const rootDir=require('../util/path')



router.use('/add-product',(req,res,next)=>{ 

      res.sendFile(path.join(rootDir,'views','add-product.html'));
       console.log("In the Middlewere");
      // res.send('<form action="/admin/product" method="POST"> <input type="text" name="title"><button type="submit">Add Product</button></form>');
 });

router.post('/product',(req,res,next)=>{
       console.log("Inside post reques");
       console.log(req.body);
       res.redirect('/');
});


module.exports=router;