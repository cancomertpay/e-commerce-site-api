import express from 'express';
import { createProductCtrl, getProductsCtrl, getSingleProductCtrl } from '../controllers/productsCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedin.js';

const productsRouter = express.Router();
productsRouter.post('/', isLoggedIn, createProductCtrl);
productsRouter.get('/', getProductsCtrl);
productsRouter.get('/:id', getSingleProductCtrl);


export default productsRouter;