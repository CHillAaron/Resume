const Product = require('../models/product.model');
const productsRoutes = require('../routes/products.routes');

module.exports.findAllProducts = (req, res)=> {
    console.log("Getting all the products here")
    //mongoose command to retrieve all Products from the Product table/collection
    Product.find()
    .then(allProduct => res.json({results:allProduct}))
    .catch(err => res.json({error:err}))
}

module.exports.createProduct =(req,res)=> {
    console.log("Creating the Product")
    Product.create(req.body)
        .then(newProduct => res.json({results:newProduct}))
        .catch(err => res.json({error:err}))
}

module.exports.findOneProduct= (req,res)=>{
    console.log('Product id to find', req.params.id)
    Product.findOne({_id: req.params.id})
        .then(selectedProduct => res.json({results: selectedProduct}))
        .catch(err=> res.json({error: err}))
}

module.exports.deleteOneProduct= (req,res)=>{
    console.log('Product id to to delete', req.params.id)
    Product.deleteOne({_id: req.params.id})
        .then(deleteProduct => res.json({results: deleteProduct}))
        .catch(err=> res.json({error: err}))
}

module.exports.updateProduct=(req,res)=>{
    console.log('Product to update', req.params.id)
    Product.findOneAndUpdate({_id: req.params.id}, req.body, {
        new:true,
        runValidators:true,
        useFindAndModify:false
    })
    .then(update=> res.json({results: update}))
    .catch(err=>res.json({error:err}))
}