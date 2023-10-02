import { Product } from "@/utils/models";


export async function listCoffees(): Promise<Product[] | undefined>  {
  try {
    const listCoffeesReq = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/coffees?populate=*`,
      {
        headers: { Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}` }
      }
    ); 
    if (listCoffeesReq.ok) {
        const coffeeData = await listCoffeesReq.json();
        return coffeeData.data as Product[];   
    }
  } catch (error) {
    throw error;
  }
}
