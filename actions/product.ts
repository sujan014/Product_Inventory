"use server";
import { NewProduct, ProductSchema } from "../lib/types";
import prisma from "../utils/prisma";
import { revalidatePath } from "next/cache";

export const actionProduct = async (newProduct: NewProduct) => {
    // server-side validation        

    const result = ProductSchema.safeParse(newProduct);
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
        await prisma.category.update({
            where: {
                name: newProduct.category
            },
            data: {
                product: {
                    create: {
                        name: newProduct.product,
                        inventory: {
                            create: {
                                qty: newProduct.quantity,
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
