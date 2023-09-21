import Joi from "joi";
import { CreateUserData} from "../protocols";
//import { User } from "protocols";
//import { Music } from "./../protocols/Music";

export const UserSchema = Joi.object<CreateUserData>({
    name: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(3).required()
})

