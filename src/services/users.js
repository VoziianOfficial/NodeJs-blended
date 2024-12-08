import { UsersCollection } from "../db/models/User.js";

export const findUserByEmail = (email) => UsersCollection.findOne({ email });
