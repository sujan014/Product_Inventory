import prisma from "../../utils/prisma";

export async function getAllProducts(){
    const allProducts =  await prisma.products.findMany({
        include: {
            inventory: true
        }
    });
    console.log(allProducts);
    return allProducts;
}