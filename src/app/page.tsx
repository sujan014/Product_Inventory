import FruitCard from "@/components/FruitCard";
import { productList } from "@/data/data";
import Link from "next/link";
import prisma from "../../utils/prisma";

export default async function Home(){    
    const products = await prisma.products.findMany();
    const categories = await prisma.category.findMany();    

    return (
        <>
            <ul>
                {products.map((product) => {
                    console.log(product);
                    return(
                        <li key={product.id}>
                            <p>{product.name}</p>                            
                        </li>
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