const ProductModel = require("../models/Product.model")



const createProduct = async (name,category, price , available)=>
{
    return await ProductModel.create({ name, category ,price , available});
}



const getProduct = async () => {
    return await ProductModel.find();
  };

  module.exports = {
 createProduct,
 getProduct
};