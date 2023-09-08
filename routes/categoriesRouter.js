import express from "express";
import { createCategoryCtrl } from "../controllers/categoriesCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedin.js";

const categoriesRouter = express.Router();

categoriesRouter.post('/', isLoggedIn, createCategoryCtrl);

export default categoriesRouter;