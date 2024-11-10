import fs from "fs/promises";
import { PATH_DB } from "../constants/path.js";

const countProductsByCategory = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    const products = JSON.parse(data);
    const result = {};
    for (const product of products) {
      result[product.category] = [];
    }
    for (const key in result) {
      result[key] = products.filter((product) => product.category === key);
    }
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};
countProductsByCategory();
