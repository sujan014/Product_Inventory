"use client";

import { useEffect, useRef, useState } from "react";
import { actionProduct } from "../../../actions/product";
import toast from "react-hot-toast";

interface NewCategories{
    value: string;
    label: string;
}
export default function NewProductForm(){
    const formRef = useRef<HTMLFormElement>(null);
    
    const formAction = async (formData: FormData) => {
        const newProd = {
            category: formData.get("category") as string,
            product: formData.get("name") as string,
            quantity: parseInt(formData.get("quantity") as string)
        }        

        let response = await actionProduct(newProd);
        if (response?.error){
            toast.error(response.error);
        } else{
            toast.success(`${newProd.product} was added successfully.`)
        }

        formRef.current?.reset();
    }

    return(
        <div className="w-96 flex  border-2 border-black pt-6 mx-auto">
            <form 
                className="grid grid-flow-row my-4 m-2 mx-4"
                ref={formRef}
                action={formAction}
                >
                <div>                    
                    <span className="mr-4 text-lg font-bold ">Category</span>                                                            
                    <input 
                        className="mb-4 outline-double"
                        type='text'
                        name="category" 
                        placeholder="Enter product name"                        
                    />
                </div>
                <div>
                    <span className="mr-4 text-lg font-bold  w-50">Product</span>
                    <input 
                        className="mb-4 outline-dashed"
                        type='text'
                        name="name" 
                        placeholder="Enter product name"                        
                    />
                </div>
                <div>
                    <span className="mr-4 text-lg font-bold  w-0">Quantity</span>
                    <input 
                        className="mb-4 outline-double"
                        type='number'
                        name="quantity"
                        placeholder="Enter quantity"
                        
                    />
                </div>
                <button 
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full"
                    type="submit"
                >
                    Submit
                </button>
            </form>
        </div>
    )
}