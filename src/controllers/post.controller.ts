import { Request, Response, NextFunction } from "express";

import { CreatePost, Post } from "protocols";
import httpStatus from "http-status";
import { postRepository } from "../repositories/post.repository";

async function getPosts(req: Request, res: Response, next: NextFunction) {
  try{
  const result = await postRepository.Read();
  const posts : Post[] = result
  res.send(posts);
  }
  catch (err) {
    next(err);
  }
}

async function getPost(req:Request, res: Response) {
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) res.sendStatus(httpStatus.BAD_REQUEST);
  const result = await postRepository.ReadOne(id)
  const post : Post = result
  res.send(post)
}

async function createPost(req: Request, res: Response) {
  const body = req.body as CreatePost

  await postRepository.Create(body);

  res.sendStatus(201);
}

async function updatePost(req: Request, res: Response) {
  const body = req.body as CreatePost
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) res.sendStatus(httpStatus.BAD_REQUEST);
  await postRepository.Update(id, body);

  res.sendStatus(201);
}

async function deletePost(req: Request, res: Response) {
  const id: number = parseInt(req.params.id);
  if (isNaN(id)) res.sendStatus(httpStatus.BAD_REQUEST);
  await postRepository.Delete(id);

  res.sendStatus(201);
}

const postController = {
getPosts,
getPost,
createPost,
updatePost,
deletePost
}

export default postController;
