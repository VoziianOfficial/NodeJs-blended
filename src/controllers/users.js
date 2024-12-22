import createHttpError from "http-errors";
import {
  findUserByEmail,
  createUser,
  // createUserSession,
} from "../services/users.js";
// import bcrypt from "bcrypt";

export const registerUserController = async (req, res) => {
  const user = await findUserByEmail(req.body.email);

  if (user) throw createHttpError(409, "Email in use");

  const newUser = await createUser(req.body);

  res.status(201).json({
    status: 201,
    message: "Successfully registered a user!",
    data: { name: newUser.name, email: newUser.email },
  });
};

// export const loginUserController = async (req, res) => {
//   const user = await findUserByEmail(req.body.email);

//   if (!user) {
//     throw createHttpError(401, "Wrong credentials");
//   }

//   const isCorrectPassword = await bcrypt.compare(
//     req.body.password,
//     user.password
//   );

//   if (!isCorrectPassword) {
//     throw createHttpError(401, "Wrong credentials");
//   }

//   const session = await createUserSession(user._id);
// };
