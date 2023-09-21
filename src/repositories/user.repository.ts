import { CreateUserData, User } from "protocols";
import prisma from "../database/database";


export async function Read() {
    const users: User[] = await prisma.user.findMany();
    return users;
} 

export async function ReadOne(id: number) {
    const user: User = await prisma.user.findUnique({where: { id }});
    return user;
}

export async function Create (user: CreateUserData) {
    return await prisma.user.create({data: user});
}
    
export async function Update(id: number, user: CreateUserData) {
    return prisma.user.update({data: user,where: { id }});
}


export async function Delete(id: number) {
    return prisma.user.delete({where: { id }})
}

export const userRepository = {Create, ReadOne, Read, Update, Delete}