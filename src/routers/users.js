import { Router } from "express";
import { validateBody } from "../utils/validateBody.js";
import {
  loginUserSchema,
  registerUsersSchema,
} from "../validation/users.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import {
  loginUserController,
  registerUserController,
} from "../controllers/users.js";

const router = Router();

router.post(
  "/signup",
  validateBody(registerUsersSchema),
  ctrlWrapper(registerUserController)
);

router.post(
  "/login",
  validateBody(loginUserSchema),
  ctrlWrapper(loginUserController)
);

export default router;
