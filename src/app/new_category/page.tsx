import CategoryCard from "@/components/CategoryCard";
import { getAllCategories } from "@/data/category";
import NewCategoryForm from "@/ui/new_category/new_category";

export default async function NewProductPage(){
    const prodCategories = await getAllCategories();
    return(
        <div className="mt-6">
            <NewCategoryForm />            
            <div>                
                {prodCategories.map((category) => {
                    let props = {
                        id: category.id,
                        name: category.name
                    }
                    return(
                        <CategoryCard {...props}/>
                    )
                })}                
            </div>
        </div>
    )
}