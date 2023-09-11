import express from 'express';
import { createProductCtrl, deleteProductCtrl, getProductsCtrl, getSingleProductCtrl, updateProductCtrl } from '../controllers/productsCtrl.js';
import { isLoggedIn } from '../middlewares/isLoggedin.js';
import upload from '../config/fileUpload.js';
import isAdmin from '../middlewares/isAdmin.js';
const productsRouter = express.Router();

productsRouter.post('/', isLoggedIn, isAdmin, upload.array('files'), createProductCtrl);
productsRouter.get('/', getProductsCtrl);
productsRouter.get('/:id', getSingleProductCtrl);
productsRouter.put('/:id', isLoggedIn, isAdmin, updateProductCtrl);
productsRouter.delete('/:id/delete', isLoggedIn, isAdmin, deleteProductCtrl);


export default productsRouter;