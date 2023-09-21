import Joi, { number } from "joi";
import { CreatePost } from "../protocols";
//import { User } from "protocols";
//import { Music } from "./../protocols/Music";

export const postSchema = Joi.object<CreatePost>({
    content: Joi.string().required(),
    userId: Joi.number().required()
})

