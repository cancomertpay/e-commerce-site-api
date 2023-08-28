import express from 'express';
import { createProductCtrl, deleteProductCtrl, getProductsCtrl, getSingleProductCtrl, updateProductCtrl } from '../controllers/productsCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedin.js';

const productsRouter = express.Router();

productsRouter.post('/', isLoggedIn, createProductCtrl);
productsRouter.get('/', getProductsCtrl);
productsRouter.get('/:id', getSingleProductCtrl);
productsRouter.put('/:id', isLoggedIn, updateProductCtrl);
productsRouter.delete('/:id/delete', isLoggedIn, deleteProductCtrl);


export default productsRouter;