"use client";
import { useRef } from "react";
import { actionCategory } from "../../../actions/category";
import toast from "react-hot-toast";

export default function NewCategoryForm(){
    const formRef = useRef<HTMLFormElement>(null);
    
    const formAction = async (formData: FormData) => {
        // Zod validation
        const newCategory = {
            category: formData.get("category") as string,
        }
        let response = await actionCategory(newCategory);
        if (response?.error){
            toast.error(response.error);
        } else{
            toast.success(`${newCategory.category} was added successfully.`)
        }
        formRef.current?.reset();
    }

    return(
        <div className="w-1/4 flex border-2 border-gray-100 shadow pt-6 px-5 mx-auto ">
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
                        placeholder="Enter new category"
                        // required
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