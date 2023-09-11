import express from 'express';
import { createCouponCtrl, getAllCouponsCtrl } from '../controllers/couponCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';


const couponsRouter = express.Router();

couponsRouter.post("/", isLoggedIn, createCouponCtrl)
couponsRouter.get("/", isLoggedIn, getAllCouponsCtrl)


export default couponsRouter;