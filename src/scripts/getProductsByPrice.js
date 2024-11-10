import fs from "fs/promises";
import { PATH_DB } from "../constants/path.js";

const getProductsByPrice = async (price) => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    const products = JSON.parse(data);
    const filterProducts = products.filter((product) => product.price > price);
    console.log(filterProducts);
  } catch (error) {
    console.error(error);
  }
};

getProductsByPrice(300);
