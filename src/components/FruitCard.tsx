
type Fruit ={
    id: number;
    name: string;
    qty: number;
    price: number;
};

export default function FruitCard(fruit: Fruit){
    return(
        <div className="w-2/4 my-2 mx-auto px-2 border-2 flex flex-row rounded-md bg-gray-100 hover:bg-teal-200">
            <div className="mr-10 text-xl">
                {fruit.id}
            </div>
            <div  className="basis-1/4 text-xl">
                {fruit.name}
            </div>
            <div  className="basis-1/4 text-xl">
                <div>
                    Stock:
                </div>
                <div>
                    {fruit.qty}
                </div>
            </div>
            <div className="basis-1/4 text-xl ">
                Price ($): {fruit.price}
            </div>
            <div className="flex flex-col w-full my-2">
                <div className="flex flex-row">
                    <button className="flex-auto w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">-</button>
                    <span className="flex-auto w-1/4 text-2xl text-center">000</span>
                    <button className="flex-auto w-1/4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">+</button>
                </div>
                <button className="mt-3 w-full py-1 px-4 rounded-full text-white font-bold bg-blue-500 hover:bg-blue-700">Add to cart</button>
            </div>
        </div>
    )    
}