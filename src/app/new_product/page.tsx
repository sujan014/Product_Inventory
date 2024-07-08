import { fetchOptionCategory } from "@/data/category";
import NewProductForm from "@/ui/new_product/new_product";

export default function NewProductPage(){
    return(
        <div className="flex">
            <NewProductForm />
        </div>        
    )
}