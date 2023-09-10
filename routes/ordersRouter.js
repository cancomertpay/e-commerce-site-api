import express from "express";

import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import { createOrderCtrl, getAllOrdersCtrl, getSingleOrder } from "../controllers/orderCtrl.js";

const orderRouter = express.Router();

orderRouter.post('/', isLoggedIn, createOrderCtrl);
orderRouter.get('/', isLoggedIn, getAllOrdersCtrl);
orderRouter.get('/:id', isLoggedIn, getSingleOrder);

export default orderRouter;