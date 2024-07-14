import { NewProduct } from "../../lib/types";
import prisma from "../../utils/prisma";
import { getAllCategories } from "./category";

export async function getAllProducts(){
    const allProducts =  await prisma.products.findMany({
        include: {
            inventory: true
        }
    });
    //console.log(allProducts);
    return allProducts;
}

export async function getDetailProducts(){
    const detailProducts =  await prisma.products.findMany({
        include: {
            inventory: true,
            Category: true
        }
    });
    console.log(detailProducts);
    return detailProducts    
}