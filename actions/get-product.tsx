import { Product } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

const getProduct = async (id: string): Promise<Product> => {
    // Add a cache-busting parameter using a random timestamp
    const timestamp = Date.now();
    // const res = await fetch(`${URL}?timestamp=${timestamp}`);
    const res = await fetch(`${URL}/${id}?timestamp=${timestamp}`);
  
    return res.json();
  };
  

export default getProduct;