interface ICategory{
    id: String;
    name: String;
}
export default function CategoryCard({id, name}: ICategory){
    return (
        <div className="w-1/4 border border-gray-200 rounded-lg my-4 mx-auto shadow hover:bg-gray-100 p-10 flex flex-row">
            <div className="basis-1/2">
                <span className="text-2xl font-bold">{name}</span>
            </div>                        
        </div>
    )
}
