import Product from "../models/Product"

export const createProduct = async (req, res) => {
   const {name, category, price} = req.body
   const newProduct = new Product({name, category, price});
   const productSaved = await newProduct.save()
   res.status(201).json(productSaved)
}

export const getProduct = async (req, res) => {
    const products = await Product.find();
    res.json(products)
}


export const getProductById = (req, res) => {

}


export const updateProductByid = (req, res) => {

}


export const deleteProductByid = (req, res) => {

}