import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import dbConnect from '../config/dbConnect.js';
import { globalErrHandler, notFound } from '../middlewares/globalErrHandler.js';
import userRoutes from '../routes/usersRoute.js';


// db connect
dbConnect();
const app = express();

// pass incoming data
app.use(express.json());

// routes
app.use('/api/v1/users/', userRoutes);

// err middlewares
app.use(notFound);
app.use(globalErrHandler);

export default app;