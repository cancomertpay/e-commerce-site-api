import express from "express";

import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import { createOrderCtrl, getAllOrdersCtrl, getSingleOrder, updateOrderCtrl } from "../controllers/orderCtrl.js";

const orderRouter = express.Router();

orderRouter.post('/', isLoggedIn, createOrderCtrl);
orderRouter.get('/', isLoggedIn, getAllOrdersCtrl);
orderRouter.get('/:id', isLoggedIn, getSingleOrder);
orderRouter.put('/update/:id', isLoggedIn, updateOrderCtrl);

export default orderRouter;