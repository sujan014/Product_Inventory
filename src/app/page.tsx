import FruitCard from "@/components/FruitCard";
import { productList } from "@/data/data";
import Link from "next/link";
import prisma from "../../utils/prisma";
import { getAllInventories } from "@/data/inventory";
import { getAllProducts } from "@/data/product";
import ProductCard from "@/components/ProductCard";
import ProductItem from "@/ui/new_product/ProductItem";

export default async function Home(){    
    const products = await getAllProducts();
    const categories = await prisma.category.findMany();  
    

    return (
        <>
            <ul>
                {products.map((product) => {                    
                    //console.log(product);
                    let props = {
                        id: product.id,
                        name: product.name,
                        qty: product.inventory?.qty as number,
                    }
                    return(
                        <ProductItem key = {product.id} {...props}/>    //<ProductCard name={props.name} qty={props.qty}/>                        
                    )
                })}
            </ul>
            <hr className="my-3"/>
            <ul>
                {categories.map((category) => (
                    <li key={category.id}>{category.name}</li>
                ))}
            </ul>            
            {/* <hr className="my-3"/>
            <div className="p-5">
                <p className="text-xl">
                    Today's fruit list
                </p>
                {productList.map((product) => 
                    (
                        <FruitCard {...product} />
                    )
                )}
            </div> */}
        </>        
    )
}
