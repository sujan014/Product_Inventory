import FruitCard from "@/components/FruitCard";
import { products } from "@/data/data";
import Link from "next/link";

export default function Home(){
    return (
        <div className="p-5">
            <p className="text-xl">
                Today's fruit list
            </p>
            {products.map((product) => 
                (
                    <FruitCard {...product} />
                )
            )}            
        </div>      
    )
}