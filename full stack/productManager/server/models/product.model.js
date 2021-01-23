const mongoose = require("mongoose");

//Basic setup of the Mongoose Schema
const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required:[true, "You must enter in a product Name"],
        minlength: [2, "Setup has to be more than 2 characters"]
    },
    
    price: {
        type:Number,
        required:[true, "We dont give away free stuff"]

    },
    description: {
        type:String,
        required:[true, "What is the Product used for?"],
        minlength: [10, "description has to be more than 10 characters"]
    }}, {timestamps:true})
 
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product