const {getProduct,createProduct} = require("../services/Product.services")


exports.GetProduct= async()=>{

    const product = await getProduct();
    res.json(product);
}
exports.createProduct = async(req,res) =>{

        const {name,category,price,available}= req.body;
        const Product =  await createProduct(name,category,price,available);
        res.json(Product)
}

