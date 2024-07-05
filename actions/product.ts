"use server";
import prisma from "../utils/prisma";
import { revalidatePath } from "next/cache";

export const actionProduct = async (formData: FormData) => {
    console.log(Object.fromEntries(formData));
    const data = {
        formCategory: formData.get("category") as string,
        formName: formData.get("name") as string,
        formQuantity: parseInt(formData.get("quantity") as string)
    }

    console.log("form name => " + data.formCategory);
    console.log("form name => " + data.formName);
    console.log("form quantity => " + data.formQuantity);
    try{
        await prisma.category.update({
            where: {
                name: data.formCategory                                
            },
            data: {
                product: {
                    create: {
                        name: data.formName,
                        inventory: {
                            create: {
                                qty: data.formQuantity,
                            }
                        }
                    }
                }
            }            
        })
        
    } catch(error){
        console.log(error);
    }
    revalidatePath("/");
}

// export const action = async (formData: FormData) => {
//     console.log(Object.fromEntries(formData));
//     const data = {
//         formName: formData.get("name") as string,
//         formQuantity: parseInt(formData.get("quantity") as string)
//     }

//     console.log("form name => " + data.formName);
//     console.log("form quantity => " + data.formQuantity);
//     try{
//         await prisma.products.create({
//             data: {
//                 name: data.formName,
//                 inventory: {
//                     create: {
//                         qty: data.formQuantity
//                     }
//                 }
//             }
//         })
        
//     } catch(error){
//         console.log(error);
//     }
//     revalidatePath("/");
// }