"use client";

import { useEffect, useRef, useState } from "react";
import { actionProduct } from "../../../actions/product";
import { getAllCategories } from "@/data/category";
import prisma from "../../../utils/prisma";

interface NewCategories{
    value: string;
    label: string;
}
export default async function NewProductForm(){
    const formRef = useRef<HTMLFormElement>(null);
    
    const formAction = async (formData: FormData) => {
        await actionProduct(formData);

        formRef.current?.reset();
    }

    return(
        <div className="w-96 mt-10 my-auto border-2 rounded-md flex justify-center">
            <form 
                className="grid grid-flow-row my-4 m-2 mx-4"
                ref={formRef}
                action={formAction}
                >
                <div>
                    <span className="mr-4 text-lg font-bold">Category</span>                                        

                    <input 
                        className="mb-4 outline-double"
                        type='text'
                        name="category" 
                        placeholder="Enter product name"                        
                    />
                </div>
                <div>
                    <span className="mr-4 text-lg font-bold">Product</span>
                    <input 
                        className="mb-4 outline-double"
                        type='text'
                        name="name" 
                        placeholder="Enter product name"                        
                    />
                </div>
                <div>
                    <span className="mr-4 text-lg font-bold">Quantity</span>
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