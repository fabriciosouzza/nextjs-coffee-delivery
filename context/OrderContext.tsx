"use client";
import {
  addNewProductAction,
  cleanProductionAction,
  decreaseProductAction,
  deleteProductAction,
  increaseProductAction,
} from "@/reducers/productOrder/actions";
import { productOrderReducer } from "@/reducers/productOrder/reducer";
import {
  headerPinAddressType,
  productOrderType,
  productOrderTypeToFetch,
} from "@/utils/models";
import { ReactNode, createContext, useReducer, useState } from "react";

export const OrderContext = createContext({} as OrderContextType);

interface OrderContextProviderProps {
  children: ReactNode;
}

interface OrderContextType {
  productsState: productOrderType[];
  productsToFetch: productOrderTypeToFetch[];
  headerPinAddressInfo: headerPinAddressType;
  setHeaderPinAddressInfo: ({}: headerPinAddressType) => void;
  addNewProduct: (orderAttributes: productOrderType) => void;
  deleteProduct: (orderAttributes: productOrderType) => void;
  increaseProductAmount: (orderAttributes: productOrderType) => void;
  decreaseProductAmount: (orderAttributes: productOrderType) => void;
  cleanProductList: () => void;
}

export default function OrderContextProvider({
  children,
}: OrderContextProviderProps) {
  const [productsState, dispatch] = useReducer(productOrderReducer, []);
  const [headerPinAddressInfo, setHeaderPinAddressInfo] =
    useState<headerPinAddressType>({
      cidade: "",
      estado: "",
    });

  const productsToFetch: productOrderTypeToFetch[] = productsState.map(
    (item) => {
      return {
        coffeeId: `${item.id}`,
        price: item.price,
        amount: item.amount,
      };
    }
  );

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

  function cleanProductList() {
    dispatch(cleanProductionAction());
  }

  return (
    <OrderContext.Provider
      value={{
        productsState,
        productsToFetch,
        headerPinAddressInfo,
        addNewProduct,
        deleteProduct,
        increaseProductAmount,
        decreaseProductAmount,
        cleanProductList,
        setHeaderPinAddressInfo,
      }}
    >
      {children}
    </OrderContext.Provider>
  );
}
