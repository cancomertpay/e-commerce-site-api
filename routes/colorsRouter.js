import express from "express";

import { createColorCtrl, deleteColorCtrl, getAllColorsCtrl, getSingleColorCtrl, updateColorCtrl } from "../controllers/colorsCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";
import isAdmin from "../middlewares/isAdmin.js";

const colorsRouter = express.Router();

colorsRouter.post("/", isLoggedIn, isAdmin, createColorCtrl);
colorsRouter.get("/", getAllColorsCtrl);
colorsRouter.get("/:id", getSingleColorCtrl);
colorsRouter.delete("/:id", isLoggedIn, isAdmin, deleteColorCtrl);
colorsRouter.put("/:id", isLoggedIn, isAdmin, updateColorCtrl);

export default colorsRouter;