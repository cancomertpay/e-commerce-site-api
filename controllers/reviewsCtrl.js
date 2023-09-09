import Product from "../model/Product.js";
import Review from "../model/Review.js";
import asyncHandler from "express-async-handler";

// @desc create new review
// @route POST /api/v1/reviews
// @access Private/Admin
export const createReviewCtrl = asyncHandler(async(req, res)=>{
  const { product, message, rating } = req.body;
  // 1. find the product
  const {productId} = req.params;
  const productFound = await Product.findById(productId).populate('reviews');
  if(!productFound){
    throw new Error('Product not found');
  }
  // check if use already reviewed this product
  const hasReviewed = productFound?.reviews?.find((review) => {
    return review?.user?.toString() === req?.userAuthId?.toString();
  });
  if(hasReviewed) {
    throw new Error("You have already reviewed this product")
  }
  // create review
  const review = await Review.create({
    message,
    rating,
    product: productFound?._id,
    user: req.userAuthId
  });
  // Push review into the product found
  productFound.reviews.push(review?._id)
  // resave
  await productFound.save();
  res.status(201).json({
    success: true,
    message: "Review created successfully"
  })
}) 