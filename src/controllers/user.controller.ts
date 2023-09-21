import { Request, Response, NextFunction } from "express";
import { userRepository } from "../repositories/user.repository";
import { CreateUserData, User } from "protocols";
import httpStatus from "http-status";

async function getUsers(req: Request, res: Response, next: NextFunction) {
  try{
  const result = await userRepository.Read();
  const users : User[] = result
  res.send(users);
  }
  catch (err) {
    next(err);
  }
}

async function getUser(req:Request, res: Response) {
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) res.sendStatus(httpStatus.BAD_REQUEST);
  const result = await userRepository.ReadOne(id)
  const user : User = result
  res.send(user)
}

async function createUser(req: Request, res: Response) {
  const body = req.body as CreateUserData

  await userRepository.Create(body);

  res.sendStatus(201);
}

async function updateUser(req: Request, res: Response) {
  const body = req.body as CreateUserData
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) res.sendStatus(httpStatus.BAD_REQUEST);
  await userRepository.Update(id, body);

  res.sendStatus(201);
}

async function deleteUser(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) res.sendStatus(httpStatus.BAD_REQUEST);
  await userRepository.Delete(id);

  res.sendStatus(201);
}

const userController = {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser
}

export default userController;

