import { UsersCollection } from "../db/models/User.js";
import bcrypt from "bcrypt";
import { SessionsCollection } from "../db/models/Session.js";
import { createSession } from "../utils/createSession.js";

export const findUserByEmail = (email) => UsersCollection.findOne({ email });

export const createUser = async (userData) => {
  const password = await bcrypt.hash(userData.password, 10);

  return UsersCollection.create({
    ...userData,
    password,
  });
};

export const createUserSession = async (userId) => {
  await SessionsCollection.deleteOne({ userId });

  return SessionsCollection.create({ userId, ...createSession() });
};
