"use client";

import React, { useState } from "react";
import { ProductListType, ProductType } from "../../../lib/types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartPlus, faChevronCircleDown, faChevronCircleUp, faCoffee, faRotateBack, faTrash } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";

interface SaleItem {
    id: string; // product id    
    name: string;   // product name
    qty: number;    // product number to sell    
}
interface SaleItemList {
    saleItemList : SaleItem[]
}

export default function SalesForm({productTypeList} : ProductListType){
    //console.log(productTypeList);
    const [saleProduct, setSaleProduct] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [saleList, setSaleList] = useState<SaleItem[]>([]);

    const handleProduct = (e:React.ChangeEvent<HTMLSelectElement>) => {
        setSaleProduct(e.target.value);        
    }
    const handleQuantity = (ch: string) => {
        switch (ch) {
            case '+':
                setQuantity((value) => value + 1);
                break;
            case '-':
                if (quantity > 0)
                    setQuantity((value) => value - 1);
            default:
                break;
        }
    }
    const handleCart = () => {
        var productModel = productTypeList.find((item) => item.id === saleProduct);
        // validate entry here
        if (productModel === undefined){
            toast.error('Select product you want to add.');
            return;
        }
        if (quantity === 0){
            toast.error('Select quantity you want to add.');
            return;
        }
        var tmodel = {
            id: saleProduct,
            name: productModel.name,
            qty: quantity,   
        }
        setSaleList((currentList) => [...currentList, tmodel]);
    }
    const handleQtyRefresh= () => {
        setQuantity(0);
    }
    const handleCartClear = () => {
        setSaleList([]);
    }
    const handleDeleteItem = (index: number) => {
        var tList = [...saleList];
        tList.splice(index, 1)        
        setSaleList(tList);
    }

    return(        
        //<div className="w-1/4 flex border-2 border-gray-100 shadow pt-6 px-5 mx-auto ">
        <div className="w-2/4 my-6 py-10 mx-auto">
            <div className="flex flex-row gap-10 border-2 shadow rounded-md">
            {/* <div className="grid grid-rows-3 grid-flow-col gap-4"> */}
                <div className="basis-1/3">
                <select
                    value={saleProduct}
                    onChange={handleProduct}
                >
                    <option value='' key=''>Select a product</option>
                    {productTypeList.map((item: ProductType, index: number) => (
                        <option value={item.id} key={item.id}>{item.name}</option>
                    ))}
                </select>
                </div>
                <div className="basis-1/3 flex flex-row ml-10 border-2 ">
                    <button 
                        className="basis-1/3 bg-black hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-lg"
                        onClick={() => handleQuantity('+')}
                        >
                        <FontAwesomeIcon icon={faChevronCircleUp} /> 
                    </button>
                    <div className="basis-1/3 text-xl">
                        <p className="text-center">{quantity}</p>                        
                    </div>
                    <button 
                        className="basis-1/3 bg-black hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-lg"
                        onClick={() => handleQuantity('-')}
                        >
                        <FontAwesomeIcon icon={faChevronCircleDown} />
                    </button>
                </div>
                <div className="basis-1/3 flex flex-row border-2">
                    <button
                        className="basis-1/3 w-[150px] h-[40px] bg-black hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-lg"
                        onClick={handleQtyRefresh}
                    >
                        <FontAwesomeIcon icon={faRotateBack}/>                        
                    </button>
                    <div className="basis-1/3">

                    </div>
                    <button
                        className="basis-1/3 w-[150px] h-[40px] bg-black hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-lg place-self-end"
                        onClick={() => handleCart()}
                    >
                        <FontAwesomeIcon icon={faCartPlus}/>                        
                    </button>
                </div>
            </div>
            <div className="mx-auto">
                <button 
                    className="w-[150px] h-[40px] bg-black hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-lg"
                    onClick={handleCartClear}
                    >
                    Clear cart
                </button>
            </div>
            {saleList.map((item, index) => {
                return(     
                    <div key={item.id} className="w-60 border border-gray-200 rounded-lg my-2 mx-auto shadow bg-gray-100 p-10 flex flex-row">
                        <div className="basis-1/3">
                            <p className="text-center text-2xl">Name: {item.name}</p>
                        </div>
                        <div className="basis-1/3">
                            <p className="text-center text-2xl">Quantity: {item.qty}</p>
                        </div>                        
                        <button
                            className="basis-1/4 w-[150px] h-[40px] bg-black hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-lg place-self-end"
                            onClick={() => {
                                handleDeleteItem(index)
                            }}
                        >
                            <FontAwesomeIcon icon={faTrash}/>
                        </button>                        
                    </div>               
                )
            })}
        </div>
    )
}