import createHttpError from "http-errors";
import { findUserByEmail } from "../services/users.js";

export const registerUserController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);

  if (user) throw createHttpError(409, "Email in use");
};
