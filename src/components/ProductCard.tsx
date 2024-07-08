interface IProduct {
    name: string;
    qty: number;
};

export default function ProductCard({name, qty}: IProduct){
    return(
        // <div className="w-2/4 my-6 mx-auto px-2 border-2 border-black flex flex-row rounded-md bg-gray-100 hover:bg-cyan-200 hover:text-orange-600">
        <div className="w-2/4 h-24 my-6 mx-auto px-2 border-2 border-black flex flex-row rounded-md  items-center text-red-400 bg-cyan-200 hover:text-white hover:bg-red-400">
            <div  className="basis-1/3 text-2xl font-bold ">
                <p className="text-center">{name}</p>
            </div>
            <div  className="basis-1/3 text-2xl font-bold">
                <p className="text-center">
                    Stock: {qty}
                </p>
            </div>
            <div className="basis-1/3 grid justify-items-end">
                <button className="w-[100px] h-[50px] bg-black hover:bg-blue-700 text-white font-bold py-1 px-2 rounded-full">
                    <p className="text-2xl">Edit</p>
                </button>
            </div>
        </div>
    )
}