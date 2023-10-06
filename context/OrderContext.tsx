'use client'
import {
  addNewProductAction,
  decreaseProductAction,
  deleteProductAction,
  increaseProductAction,
} from "@/reducers/productOrder/actions";
import { productOrderReducer } from "@/reducers/productOrder/reducer";
import { productOrderType, productOrderTypeToFetch } from "@/utils/models";
import { ReactNode, createContext, useReducer } from "react";

export const OrderContext = createContext({} as OrderContextType);

interface OrderContextProviderProps {
  children: ReactNode;
}

interface OrderContextType {
  productsState: productOrderType[];
  productsToFetch: productOrderTypeToFetch[];
  addNewProduct: (orderAttributes: productOrderType) => void;
  deleteProduct: (orderAttributes: productOrderType) => void;
  increaseProductAmount: (orderAttributes: productOrderType) => void;
  decreaseProductAmount: (orderAttributes: productOrderType) => void;
}

export default function OrderContextProvider({
  children,
}: OrderContextProviderProps) {
  const [productsState, dispatch] = useReducer(productOrderReducer, []);

  const productsToFetch: productOrderTypeToFetch[] = productsState.map((item) => {
    return     {
      coffeeId: `${item.id}`,
      price: item.price,
      amount: item.amount
    }
  })

  function addNewProduct(orderAttributes: productOrderType) {
    dispatch(addNewProductAction(orderAttributes));
  }
  function deleteProduct(orderAttributes: productOrderType) {
    dispatch(deleteProductAction(orderAttributes));
  }
  function increaseProductAmount(orderAttributes: productOrderType) {
    dispatch(increaseProductAction(orderAttributes));
  }
  function decreaseProductAmount(orderAttributes: productOrderType) {
    dispatch(decreaseProductAction(orderAttributes));
  }

  return (
    <OrderContext.Provider value={{ productsState, addNewProduct, deleteProduct, increaseProductAmount, decreaseProductAmount, productsToFetch }}>
      {children}
    </OrderContext.Provider>
  );
}
