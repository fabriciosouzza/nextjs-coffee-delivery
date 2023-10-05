import { Product, order } from "@/utils/models";


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

export async function newOrderRegister(data: order) {
  try {
    const addOrderReq = await fetch(
      "http://localhost:1337/api/histories?populate=*", 
      {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
         "Authorization": `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`
      },
      body: JSON.stringify({
        data: data
      }),
    });
    if (addOrderReq.ok) {
      const coffeeData = await addOrderReq.json();
      return console.log(coffeeData);   
  }
  } catch (error) {
    throw error;
    
  }
}
