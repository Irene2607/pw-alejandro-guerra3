import Product from "../models/Product"

export const createProduct = async (req, res) => {
   const {name, category, price} = req.body
   const newProduct = new Product({name, category, price});
   const productSaved = await newProduct.save()
   res.status(201).json(productSaved)
};

export const getProduct = async (req, res) => {
    const products = await Product.find();
    res.json(products)
};


export const getProductById = async (req, res) => {
    const product = await Product.findById(req.params.productId);
    res.status(200).json(product)
};

export const updateProductByid = async (req, res) => {
    const updateProduct = await Product.findByIdAndUpdate(req.params.productId, req.body, {

        new:true
    })
    res.status(200).json(updateProduct)
};

export const deleteProductByid = async (req, res) => {
    const {productId} = req.params; 
    await Product.findByIdAndDelete(productId);
    res.status(200).json()
};