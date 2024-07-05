"use client";
import { useRef } from "react";
import { actionCategory } from "../../../actions/category";

export default function NewCategoryForm(){
    const formRef = useRef<HTMLFormElement>(null);
    
    const formAction = async (formData: FormData) => {
        await actionCategory(formData);

        formRef.current?.reset();
    }

    return(
        <div 
            className="w-96 mt-10 my-auto border-2 rounded-md flex  justify-center">
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