const fs=require('fs');
const path=require('path');

const p =path.join(path.dirname(process.mainModule.filename),'data','cart.json');
module.exports =class Cart{
       
       static addProduct(id,productPrice){
              let cart={products:[],totalPrice:0,}
              fs.readFileSync(p,(err,fileContent)=>{
                     if(!err)
                     {
                            cart=JSON.parse(fileContent);
                     }
                     const exisitingProductIndex =cart.products.findIndex(prod => prod.id === id);
                     const exisitingProduct =cart.products[exisitingProductIndex];
                     let updatedProduct;
                     if(exisitingProduct)
                     {
                            updatedProduct ={...exisitingProduct,updatedProduct};
                            updatedProduct.qty += 1;
                            cart.products=[...cart.products];
                            cart.products[exisitingProductIndex]=updatedProduct;

                     }else
                     {
                            updatedProduct ={id:id,qty:1};
                            cart.products = [...cart.products,updatedProduct];
                     }
                     cart.totalPrice=cart.totalPrice+productPrice;
                     fs.writeFile(p,JOSN.stringify(cart),err =>{
                            console.log(err);
                     })
              });
       }
}