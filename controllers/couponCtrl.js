import Coupon from "../model/Coupon.js";
import asyncHandler from "express-async-handler";

// @desc Create new coupon
// @route POST /api/v1/coupons
// @access Private/Admin
export const createCouponCtrl = asyncHandler(async(req,res) => {
  const {code, startDate, endDate, discount} = req.body;
  // check if admin
  // check if coupon already exists
  const couponExists = await Coupon.findOne({
    code,
  })
  if(couponExists) {
    throw new Error("Coupon already exists");
  }
  // check if discount is a number
  if(isNaN(discount)){
    throw new Error("Discount value must be a number");
  }
  // create coupon
  const coupon = await Coupon.create({
    code, startDate, endDate, discount, user: req.userAuthId,
  });
  // send the response
  res.status(201).json({
    status: "success",
    message: "Coupon created successfully",
    coupon,
  })
})


// @desc get all coupons
// @route GET /api/v1/coupons
// @access Private/Admin
export const getAllCouponsCtrl = asyncHandler(async(req,res) => {
  const coupons = await Coupon.find();
  res.status(200).json({
    status: "success",
    message: "All coupons",
    coupons,
  })
}) 