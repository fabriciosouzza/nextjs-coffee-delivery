import { Product, order, productTags, successOrderInfo } from "@/utils/models";

export async function listCoffees(): Promise<Product[] | any> {
  try {
    const listCoffeesReq = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_STRAPI_URL}/api/coffees?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }
    );
    if (!listCoffeesReq.ok) {
      const error = listCoffeesReq;
      throw error;
    }
    const coffeeData = await listCoffeesReq.json();
    return coffeeData.data as Product[];
  } catch (error) {
    throw error;
  }
}

export async function tagList(): Promise< productTags | any> {
  try {
    const tagListReq = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_STRAPI_URL}/api/tags?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }
    );
    if (!tagListReq.ok) {
      const error = tagListReq;
      throw error;
    }
    const coffeeData = await tagListReq.json();
    return coffeeData.data as productTags[];
  } catch (error) {
    throw error;
  }
}

export async function newOrderRegister(data: order) {
  try {
    const addOrderReq = await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_STRAPI_URL}/api/histories?populate=*`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
        body: JSON.stringify({
          data: data,
        }),
      }
    );
    if (addOrderReq.ok) {
      const orderReqData = await addOrderReq.json();
      return orderReqData.data;
    }
  } catch (error) {
    throw error;
  }
}

export async function getOrderById(
  searchId: number
): Promise<successOrderInfo | undefined> {
  try {
    const orderReq = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_STRAPI_URL}/api/histories/${searchId}?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }
    );
    if (orderReq.ok) {
      const orderReqData = await orderReq.json();
      return orderReqData.data as successOrderInfo;
    }
  } catch (error) {
    throw error;
  }
}

export async function getHistory(
  emailTofilter: string
): Promise<successOrderInfo[] | any> {
  try {
    const orderReq = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_STRAPI_URL}/api/histories?populate[user]=*&populate[products][populate][coffeeId]=*&populate[address]=*&filters[user][email]=${emailTofilter}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }
    );
    if (orderReq.ok) {
      const historyReqData = await orderReq.json();
      return historyReqData.data as successOrderInfo[];
    }
  } catch (error) {
    throw error;
  }
}
