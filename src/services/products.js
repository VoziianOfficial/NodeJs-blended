import { Product } from "../db/models/product.js";

export const getAllProductService = () => Product.find();

export const createProductService = (productData) =>
  Product.create(productData);

export const deleteProductByIdService = (productId) =>
  Product.findByIdAndDelete(productId);
