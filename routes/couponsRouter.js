import express from 'express';
import { createCouponCtrl, deleteCouponCtrl, getAllCouponsCtrl, getSingleCouponCtrl, updateCouponCtrl } from '../controllers/couponCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';


const couponsRouter = express.Router();

couponsRouter.post("/", isLoggedIn, createCouponCtrl);
couponsRouter.get("/", isLoggedIn, getAllCouponsCtrl);
couponsRouter.get("/:id", isLoggedIn, getSingleCouponCtrl);
couponsRouter.put("/update/:id", isLoggedIn, updateCouponCtrl);
couponsRouter.delete("/delete/:id", isLoggedIn, deleteCouponCtrl);


export default couponsRouter;