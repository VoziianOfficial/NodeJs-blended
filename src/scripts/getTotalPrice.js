import fs from "fs/promises";
import { PATH_DB } from "../constants/path.js";

const getTotalPrice = async () => {
  try {
    const data = await fs.readFile(PATH_DB, "utf-8");
    const products = JSON.parse(data);
    const totalPrice = products.reduce((total, item) => {
      total += Number(item.price);
      return total;
    }, 0);
    console.log(totalPrice);
  } catch (error) {
    console.log(error);
  }
};

getTotalPrice();
