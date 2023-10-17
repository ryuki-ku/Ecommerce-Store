import { Size } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

const getSizes = async (): Promise<Size[]> => {
    // Add a cache-busting parameter using a random timestamp
    const timestamp = Date.now();
    const res = await fetch(`${URL}?timestamp=${timestamp}`);
  
    return res.json();
  };
  

export default getSizes;