import fs from "fs/promises";
import { PATH_DB } from "../constants/path.js";

const getProductsByName = async (name) => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    const products = JSON.parse(data);
    const product = products.find((item) => item.name === name);
    if (!product) {
      console.log(`Product ${name} not found`);
      return;
    }
    console.log(product);
  } catch (error) {
    console.log(error);
  }
};

getProductsByName("Incredible Wooden Bacon");
