import express from 'express';
import { createCouponCtrl } from '../controllers/couponCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedIn.js';


const couponsRouter = express.Router();

couponsRouter.post("/", isLoggedIn, createCouponCtrl)


export default couponsRouter;