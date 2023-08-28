import Product from "../model/Product.js";
import asyncHandler from 'express-async-handler';

// @desc Create new product
// @route POST /api/v1/products
// @access Private/Admin
export const createProductCtrl = asyncHandler(async(req, res) => {
  const {name, description, category, sizes, colors, user, price, totalQty, brand} = req.body;
  // Product exists
  const productExists = await Product.findOne({ name });
  if(productExists) {
    throw new Error("Product already exists")
  }
  // create the product
  const product = await Product.create({
    name, 
    description, 
    category, 
    sizes, 
    colors, 
    user: req.userAuthId, 
    price, 
    totalQty,
    brand
  });
  // push the product into category
  // send response
  res.json({
    status: "success",
    message: "Product created successfully",
    product,
  })
});

// @desc Get all products
// @route GET /api/v1/products
// @access Public
export const getProductsCtrl = asyncHandler(async(req, res) => {
  const products = await Product.find();
  res.json({
    status:  "success",
    products
  })
})

