import { CreatePost, Post } from "protocols";
import prisma from "../database/database";


export async function Read() {
    const posts: Post[] = await prisma.post.findMany();
    return posts;
} 

export async function ReadOne(id: number) {
    const post: Post = await prisma.post.findUnique({where: { id }});
    return post;
}

export async function Create (post: CreatePost) {
    return await prisma.post.create({data: post});
}
    
export async function Update(id: number, post: CreatePost) {
    return prisma.post.update({data: post, where: { id }});
}


export async function Delete(id: number) {
    return prisma.post.delete({where: { id }})
}

export const postRepository = {Create, ReadOne, Read, Update, Delete}