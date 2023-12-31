import {
  PaymentListProps,
  Product,
  Order,
  ProductTags,
  SuccessOrderInfo,
} from "@/utils/models";

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

export async function tagList(): Promise<ProductTags | any> {
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
    return coffeeData.data as ProductTags[];
  } catch (error) {
    throw error;
  }
}

export async function newOrderRegister(data: Order) {
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
): Promise<SuccessOrderInfo | undefined> {
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
      return orderReqData.data as SuccessOrderInfo;
    }
  } catch (error) {
    throw error;
  }
}

export async function getPaymentList(): Promise<
  PaymentListProps[] | undefined
> {
  try {
    const paymentReq = await fetch(
      `${process.env.NEXT_PUBLIC_CLIENT_STRAPI_URL}/api/payments?populate=*`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }
    );
    if (paymentReq.ok) {
      const paymentReqData = await paymentReq.json();
      return paymentReqData.data as PaymentListProps[];
    }
  } catch (error) {
    throw error;
  }
}

export async function getHistory(
  emailTofilter: string | null
): Promise<SuccessOrderInfo[] | any> {
  try {
    const orderReq = await fetch(
      `${process.env.NEXT_PUBLIC_SERVER_STRAPI_URL}/api/histories?populate[user]=*&populate[products][populate][coffeeId]=*&populate[address]=*&populate[payment]=*&filters[user][email]=${emailTofilter}`,
      {
        headers: {
          Authorization: `Bearer ${process.env.NEXT_PUBLIC_STRAPI_TOKEN}`,
        },
      }
    );
    if (orderReq.ok) {
      const historyReqData = await orderReq.json();
      return historyReqData.data as SuccessOrderInfo[];
    }
  } catch (error) {
    throw error;
  }
}
