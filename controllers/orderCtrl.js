import asyncHandler from "express-async-handler";
import Order from "../model/Order.js";
import Product from "../model/Product.js";
import User from "../model/User.js";


//@desc create orders
//@route POST /api/v1/orders
//@access private

export const createOrderCtrl = asyncHandler(async (req, res) => {
  // get the payload
  const {orderItems, shippingAddress, totalPrice} = req.body;

  // find the user
  const user = await User?.findById(req.userAuthId);

  // check if order is not empty
  if(orderItems?.length <= 0) {
    throw new Error("No order items")
  }

  // place/create order - save into db
  const order = await Order.create({
    user: user?._id,
    orderItems,
    shippingAddress,
    totalPrice
  })

  // update the product qty
  const products = await Product.find({_id:{$in:orderItems}});
  
  orderItems?.map(async (order)=>{
    const product = products?.find((product)=>{
      return product?._id.toString() === order?._id.toString()
    });
    if(product){
      product.totalSold += order.qty
    }
    await product.save()
  });

  // push order into user
  user.orders.push(order?._id);
  await user.save();

  // make payment (stripe)


  // payment webhook
  // update the user order
  res.json({
    success: true,
    message: "Order created",
    order,
    user
  })
});