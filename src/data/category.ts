import prisma from "../../utils/prisma";

export async function getAllCategories(){
    return await prisma.category.findMany();
}

export async function fetchOptionCategory(){    
    const categories = await prisma.category.findMany();
    const Options = categories.map((category) => ({
        value: category.name,
        label: category.name,
    }));
    return Options;
}