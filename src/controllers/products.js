import createHttpError from "http-errors";
import {
  createProductService,
  deleteProductByIdService,
  getAllProductService,
} from "../services/products.js";

export const getAllProductsController = async (req, res) => {
  const products = await getAllProductService();

  res.json({
    status: 200,
    message: "Successfully found products!",
    data: products,
  });
};

export const createProductController = async (req, res) => {
  const product = await createProductService(req.body);

  res.status(201).json({
    status: 201,
    message: "Successfully created a product!",
    data: product,
  });
};

export const deleteProductController = async (req, res) => {
  const { productId } = req.params;

  const product = await deleteProductByIdService(productId);
  console.log(product);

  if (!product) {
    throw createHttpError(404, "Product not found");
  }

  res.sendStatus(204);
};
