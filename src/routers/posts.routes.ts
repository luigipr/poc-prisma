import { Router } from "express";

import { validateSchema } from "../middlewares/validateSchema";
import postsController from "../controllers/post.controller";
import { postSchema } from "../schemas/post.schema";

const postRouter = Router();

postRouter.get("/posts", postsController.getPosts);
postRouter.get("/posts/:id", postsController.getPost);
postRouter.post("/posts", validateSchema(postSchema), postsController.createPost);
postRouter.put("/posts/:id", validateSchema(postSchema), postsController.updatePost)
postRouter.delete("/posts/:id", postsController.deletePost)

export default postRouter;