"use server";

import prisma from "../utils/prisma";
import { revalidatePath } from "next/cache";

export const actionCategory = async(formData: FormData) => {
    const actionData ={ 
        name: formData.get("category") as string,
    };

    try{
        await prisma.category.create({
            data: {
                name: actionData.name
            }
        })
    } catch (error){
        console.log(error);
    }
    revalidatePath("/");
}