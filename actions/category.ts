"use server";

import { CategorySchema, NewCategory } from "../lib/types";
import prisma from "../utils/prisma";
import { revalidatePath } from "next/cache";

export const actionCategory = async(newCategory: NewCategory) => {
    // server-side validation
    const result = CategorySchema.safeParse(newCategory);
    if (!result.success){
        let errorMessage = '';
        result.error.issues.forEach(issue => {
            errorMessage = errorMessage + issue.path[0] + ': ' + issue.message + '. \n';
        });
        return {
            error: errorMessage,
        }
    }

    try{
        await prisma.category.create({
            data: {
                name: newCategory.category
            }
        })
    } catch (error){
        console.log(error);
    }
    revalidatePath("/");
}