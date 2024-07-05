import prisma from "../../utils/prisma";

export async function getAllProducts(){
    return await prisma.products.findMany();
}