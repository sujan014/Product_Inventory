'use client';

import { useState } from "react";
import { actionDeleteProduct, actionEditProduct } from "../../../actions/product";

interface IProduct {
    id: string;
    name: string;
    qty: number;
};

export default function ProductItem(
    {id, name, qty}: IProduct
){
    const [editWin, setEditWin] = useState(false);
    const [validateDelete, setValidateDelete] = useState(false);
    const [prodName, setProdName] = useState(name);
    const [prodQty, setProdQty] = useState(qty);

    const editProductAction = async () => {
        let product = {
            name: prodName,
            qty: prodQty,
        }
        console.log(product);
        // Validation Checks TBD
        await actionEditProduct(id, prodName, prodQty);
    }

    const deleteProductAction = async () => {
        console.log(`Delete id: ${id}`);
        await actionDeleteProduct(id);
    }

    return(
        <div className="w-2/4 my-6 py-10 mx-auto border-2 shadow rounded-md grid-rows-2">
            <div className="w-full flex flex-row">
                <div  className="basis-1/3 text-2xl font-bold">
                     <p className="text-center">{name}</p>
                 </div>
                 <div  className="basis-1/3 text-2xl font-bold ">
                    <nav>{qty}</nav>
                </div>
                <div  className="basis-1/3 flex flex-row text-xl">
                    <div className="basis-1/2">
                        <button 
                            className="w-[150px] h-[40px] bg-black hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-lg"
                            onClick={() => setEditWin(true)}
                        >
                            Modify
                        </button>
                    </div>
                    <div className="basis-1/2">
                        <button 
                            className="w-[150px] h-[40px] bg-black hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-lg"
                            onClick={() => {setValidateDelete(true)}}
                        >
                            Delete
                        </button>
                    </div>
                </div>
            </div>
            {editWin ? 
            <div className="w-full flex flex-column mt-2">
                <form action="">
                    <div>
                        Product: 
                        <input 
                            type='text'
                            name='product'
                            value={prodName}
                            onChange={
                                (e) => {setProdName(e.target.value)}
                            }
                        />
                    </div>
                    <div>
                        Quantity: 
                        <input 
                            type='number'
                            name='quantity'
                            value={prodQty}
                            onChange={
                                (e) => {setProdQty(parseInt(e.target.value))}
                            }
                        />
                    </div>
                    <div>
                    <button 
                            className="w-[150px] h-[40px] bg-black hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-lg m-20"                                                        
                            onClick={editProductAction}
                        >
                            Save
                        </button>
                        <button 
                            className="w-[150px] h-[40px] bg-black hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-lg"
                            onClick={() => setEditWin(false)}
                        >
                            Discard
                        </button>                        
                    </div>                                        
                </form>
            </div> :
            null
            }
            {validateDelete ?
            <div className="w-full mt-20">
                <div className="h-10"></div>                
                <div>
                    <p className="text-xl font-bold text-center ">
                        Do you want to delete {prodName} ?
                    </p>
                </div>
                <div className="w-full flex flex-row">
                    <div className="basis-1/2 place-content-center">
                        <button 
                            className="w-[150px] h-[40px] bg-black hover:bg-blue-700 text-white py-1 px-2 rounded-md"
                            onClick={deleteProductAction}
                        >
                            Yes
                        </button>
                    </div>
                    <div className="basis-1/2 place-content-center">
                        <button 
                            className="w-[150px] h-[40px] bg-black hover:bg-blue-700 text-white py-1 px-2 rounded-md"
                            onClick={() => {setValidateDelete(false)}}
                        >
                            No
                        </button>
                    </div>
                </div>
            </div> :
            null
            }
        </div>
    )    
}

// return(
//     // <div className="w-2/4 my-6 mx-auto px-2 border-2 border-black flex flex-row rounded-md bg-gray-100 hover:bg-cyan-200 hover:text-orange-600">
//     <div className="w-2/4 h-24 my-6 mx-auto px-2 border-2 border-black flex flex-row rounded-md  items-center text-red-400 bg-cyan-200 hover:text-white hover:bg-red-400">
//         <div  className="basis-1/3 text-2xl font-bold ">
//             <p className="text-center">{name}</p>
//         </div>
//         <div  className="basis-1/3 text-2xl font-bold">
//             <p className="text-center">
//                 Stock: {qty}
//             </p>
//         </div>
//         <div className="basis-1/3 grid justify-items-end">
//             <button className="w-[100px] h-[50px] bg-black hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full">
//                 <p className="text-2xl">Edit</p>
//             </button>
//         </div>
//     </div>
// )