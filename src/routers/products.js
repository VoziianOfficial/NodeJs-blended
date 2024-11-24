import { Router } from "express";
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
} from "../controllers/products.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";

const router = Router();

router.get("/", ctrlWrapper(getAllProductsController));

router.post("/", ctrlWrapper(createProductController));

router.delete("/:productId", ctrlWrapper(deleteProductController));

export default router;
