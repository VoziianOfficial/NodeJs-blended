import { Router } from "express";
import { validateBody } from "../utils/validateBody.js";
import { registerUsersSchema } from "../validation/users.js";
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { registerUserController } from "../controllers/users.js";

const router = Router();

router.post(
  "/register",
  validateBody(registerUsersSchema),
  ctrlWrapper(registerUserController)
);

export default router;
