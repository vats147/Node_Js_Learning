

const path=require('path');
const express=require('express');

const router =express.Router();

const app=express();

router.get('/',(req,res,next)=>{
       // res.send('<h1> Hello from shop express </h1>');
       res.sendFile(path.join(__dirname,'../','views','shop.html'));
})


module.exports=router;