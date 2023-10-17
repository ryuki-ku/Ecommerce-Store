"use client"

import { Product } from "@/types";
import Currency from "@/components/ui/currency";
import Button from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";
import { useState } from "react";

interface InfoProps {
    data: Product;
}

const Info: React.FC<InfoProps> = ({
    data
}) => {
    const [currentQuantity, setCurrentQuantity] = useState(1);
    const increaseQuantity = () => {
        
        if(currentQuantity >= data.inventory) {
            console.warn("No more stock for you")
        }
        return setCurrentQuantity(currentQuantity + 1)
    }

    const decreaseQuantity = () => {
        
        if(currentQuantity <= data.inventory) {
            console.warn("Need more stock if you want to buy")
        }
        return setCurrentQuantity(currentQuantity - 1)
    }
    

    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-900">{data.name}</h1>
            <div className="mt-3 flex items-end justify-between">
                <p className="text-2xl font-medium text-gray-800">
                    <Currency value={Number(data.price)}/>
                </p>
            </div>
            <hr className="my-4"/>
            <div className="flex flex-col gap-y-6">
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Size:</h3>
                <div>
                    {data?.size?.value}
                </div>
            </div>
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Color:</h3>
                <div className="h-6 w-6 rounded-full border border-gray-600"
                style={{backgroundColor: data?.color?.value}}/>
            </div>
            <div className="flex items-center gap-x-4">
                <h3 className="font-semibold text-black">Quantity:</h3>
                <button 
                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-10 rounded-r cursor-pointer" 
                onClick={decreaseQuantity}
                disabled={currentQuantity == 1}
                >
                    <span className="m-auto text-2xl font-thin">
                                -
                    </span>
                </button>
                <input 
                type="number" 
                className="focus:outline-none text-center w-20 bg-gray-300 font-semibold text-md hover:text-black focus:text-black  md:text-basecursor-default flex items-center text-gray-900  outline-none custom-input-number"
                value={currentQuantity}
                />
                <button 
                className="bg-gray-300 text-gray-600 hover:text-gray-700 hover:bg-gray-400 w-10 rounded-r cursor-pointer" 
                onClick={increaseQuantity}
                disabled={currentQuantity >= data.inventory}
                >
                    <span className="m-auto text-2xl font-thin">
                                +
                    </span>
                </button>
            </div>
            </div>
            <div className="mt-10 flex items-center gap-x-3">
                <Button className="flex items-center gap-x-2">
                    Add to Card
                    <ShoppingCart />
                </Button>
            </div>
        </div>
    )
}

export default Info;