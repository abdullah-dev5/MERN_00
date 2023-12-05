
const  mongoose = require('mongoose');

    const ProductSchema = new  mongoose.Schema({

        name:String,
        available:Number,
        price : Number,
        category :{
            type:String , enum:['Food','PC','Cloth']
        }
    })

    const  ProductModel = mongoose.model('Products',ProductSchema)
    module.exports = ProductModel;

