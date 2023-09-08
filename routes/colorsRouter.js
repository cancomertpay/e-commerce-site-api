import express from "express";

import { createColorCtrl, deleteColorCtrl, getAllColorsCtrl, getSingleColorCtrl, updateColorCtrl } from "../controllers/colorsCtrl.js";
import { isLoggedIn } from "../middlewares/isLoggedIn.js";

const colorsRouter = express.Router();

colorsRouter.post("/", isLoggedIn, createColorCtrl);
colorsRouter.get("/", getAllColorsCtrl);
colorsRouter.get("/:id", getSingleColorCtrl);
colorsRouter.delete("/:id", isLoggedIn, deleteColorCtrl);
colorsRouter.put("/:id", isLoggedIn, updateColorCtrl);

export default colorsRouter;