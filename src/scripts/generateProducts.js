import fs from "fs/promises";
import { PATH_DB } from "../constants/path.js";
import { createFakeProduct } from "../utils/createFakeProduct.js";

const generateProducts = async (amount) => {
  try {
    const data = await fs.readFile(PATH_DB, { encoding: "utf-8" });
    const products = JSON.parse(data);

    for (let i = 1; i <= amount; i++) {
      const newProduct = createFakeProduct();
      products.push(newProduct);
    }

    await fs.writeFile(PATH_DB, JSON.stringify(products, undefined, 2));
  } catch (error) {
    console.error(error);
  }
};

generateProducts(6);
