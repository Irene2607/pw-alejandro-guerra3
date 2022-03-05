import Product from "../models/Product"

export const createProduct = (req, res) => {
    console.log(req.body)
    res.json("dd")
}

export const getProduct = (req, res) => {
    res.json("get proucts")
}


export const getProductById = (req, res) => {

}


export const updateProductByid = (req, res) => {

}


export const deleteProductByid = (req, res) => {

}