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

export const actionEditProduct = async (formId: string, prodName: string, prodQty: number) => {
    console.log(`id: ${formId}`);
    //console.log(Object.fromEntries(formData));
    const data = {
        formName: prodName as string,
        formQuantity: prodQty as number
    }

    try{
        await prisma.products.update({
            where: {
                //name: data.formName
                id: formId
            },
            data: {
                name: data.formName,
                inventory: {
                    update: {
                        qty: data.formQuantity
                    }
                }
            }

        })
    } catch (error){
        console.log(error);
    }
    revalidatePath('/');
}

export const actionDeleteProduct = async (productId: string) => {
    // delete 
    try{
        await prisma.products.delete({
            where: {
                id: productId,
            }
        })
    } catch(error){
        console.log(error);
    }
    revalidatePath("/");
}
