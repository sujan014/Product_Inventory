import { getAllProducts, getDetailProducts } from "@/data/product"
import SalesForm from "@/ui/sales/sales";
import { NewProduct } from "../../../lib/types";
import { getAllCategories } from "@/data/category";

export default async function Sales(){
    const productList = await getAllProducts();
    console.log(productList);
    return(        
        <SalesForm productTypeList={productList}/>        
    )
}