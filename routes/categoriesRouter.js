import express from "express";
import { createCategoryCtrl, getAllCategoriesCtrl, getSingleCategoryCtrl, updateCategoryCtrl, deleteCategoryCtrl } from "../controllers/categoriesCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedin.js";
import categoryFileUpload from "../config/categoryUpload.js";

const categoriesRouter = express.Router();

categoriesRouter.post('/', isLoggedIn, categoryFileUpload.single('file'), createCategoryCtrl);
categoriesRouter.get('/', getAllCategoriesCtrl);
categoriesRouter.get('/:id', getSingleCategoryCtrl);
categoriesRouter.put('/:id', isLoggedIn, updateCategoryCtrl);
categoriesRouter.delete('/:id', isLoggedIn, deleteCategoryCtrl);

export default categoriesRouter;