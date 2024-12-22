import { UsersCollection } from "../db/models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { env } from "../utils/env.js";

export const findUserByEmail = (email) => UsersCollection.findOne({ email });

export const updateUserWithToken = async (userId) => {
  const token = jwt.sign({ id: userId }, env("JWT_SECRET"));
  const updateUser = await UsersCollection.findByIdAndUpdate(
    userId,
    { token },
    { new: true }
  );

  return updateUser;
};
export const createUser = async (userData) => {
  const password = await bcrypt.hash(userData.password, 10);

  const user = await UsersCollection.create({
    ...userData,
    password,
  });
  return updateUserWithToken(user._id);
};
