import { error } from "console";
import { Product } from '@/types/product';
// export interface Product {
//   id: number;
//   title: string;
//   price: number;
//   description: string;
//   category: string;
//   image: string;
//   rating: {
//     rate: number;
//     count: number;
//   };
// }
export async function getOfferProduct(): Promise<Product[]> {
    const response = await fetch("https://fakestoreapi.com/products?limit=12");
    if(!response.ok) throw new Error("Failed to fetch products");
    const data: Product[] = await response.json();
    return data;

    
}
    
