import { Category } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

const getCategory = async (id: string): Promise<Category> => {
    // Add a cache-busting parameter using a random timestamp
    const timestamp = Date.now();
    // const res = await fetch(`${URL}?timestamp=${timestamp}`);
    const res = await fetch(`${URL}/${id}?timestamp=${timestamp}`);
  
    return res.json();
  };
  

export default getCategory;