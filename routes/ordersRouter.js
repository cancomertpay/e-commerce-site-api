import express from "express";

import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import { createOrderCtrl } from "../controllers/orderCtrl.js";

const orderRouter = express.Router();

orderRouter.post('/', isLoggedIn, createOrderCtrl)

export default orderRouter;