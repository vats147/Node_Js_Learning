const { products } = require('../../6. Working with Dynamic Content & Adding Templating Engines/routes/admin');
const Product =require('../models/product');
exports.getAddProduct = (req, res, next) => {
       res.render('add-product', {
              pageTitle: 'Add Product',
              path: '/admin/add-product',
              formsCSS: true,
              productCSS: true,
              activeAddProduct: true
       });
}

exports.postAddproduct = (req, res, next) => {
       const product =new Product(req.body.title);
       product.save();
       // products.push({ title: req.body.title });
       res.redirect('/');
};


exports.getProducts = (req, res, next) => {
       const products = Product.fetchAll((products)=>{
              res.render('shop', {
                     prods: products,
                     pageTitle: 'Shop',
                     path: '/',
                     hasProducts: products.length > 0,
                     activeShop: true,
                     productCSS: true
              });
       });
       // const products = adminData.products;
      
};