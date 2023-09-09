import express from "express";
import { createReviewCtrl } from "../controllers/reviewsCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedin.js";

const reviewRouter = express.Router();

reviewRouter.post('/:productId', isLoggedIn, createReviewCtrl);

export default reviewRouter;