import asyncHandler from "express-async-handler";
import Order from "../model/Order.js";

// @desc create orders
// @route POST /api/v1/orders
// @access private

export const createOrderCtrl = asyncHandler(async(req,res)=>{
  res.json({
    msg:"order Ctrl"
  });
})