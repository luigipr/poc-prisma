import { Router } from "express";

import { validateSchema } from "../middlewares/validateSchema";
import { UserSchema } from "../schemas/user.schema";
import userController from "../controllers/user.controller";

const userRouter = Router();

userRouter.get("/users", userController.getUsers);
userRouter.post("/users", validateSchema(UserSchema), userController.createUser);
userRouter.put("/users/:id", validateSchema(UserSchema), userController.updateUser)
userRouter.delete("/users/:id", userController.deleteUser)

export default userRouter;