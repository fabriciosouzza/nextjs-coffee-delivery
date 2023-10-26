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
  HeaderPinAddressType,
  ProductOrderType,
  ProductOrderTypeToFetch,
} from "@/utils/models";
import { ReactNode, createContext, useReducer, useState } from "react";

export const OrderContext = createContext({} as OrderContextType);

interface OrderContextProviderProps {
  children: ReactNode;
}

interface OrderContextType {
  productsState: ProductOrderType[];
  tagsToFilter: string[];
  productsToFetch: ProductOrderTypeToFetch[];
  headerPinAddressInfo: HeaderPinAddressType;
  setTagsToFilter: ([]: any) => void;
  setHeaderPinAddressInfo: ({}: HeaderPinAddressType) => void;
  addNewProduct: (orderAttributes: ProductOrderType) => void;
  deleteProduct: (orderAttributes: ProductOrderType) => void;
  increaseProductAmount: (orderAttributes: ProductOrderType) => void;
  decreaseProductAmount: (orderAttributes: ProductOrderType) => void;
  cleanProductList: () => void;
}

export default function OrderContextProvider({
  children,
}: OrderContextProviderProps) {
  const [productsState, dispatch] = useReducer(productOrderReducer, []);
  const [tagsToFilter, setTagsToFilter] = useState([]);
  const [headerPinAddressInfo, setHeaderPinAddressInfo] =
    useState<HeaderPinAddressType>({
      cidade: "",
      estado: "",
    });

  const productsToFetch: ProductOrderTypeToFetch[] = productsState.map(
    (item) => {
      return {
        coffeeId: `${item.id}`,
        price: item.price,
        amount: item.amount,
      };
    }
  );

  function addNewProduct(orderAttributes: ProductOrderType) {
    dispatch(addNewProductAction(orderAttributes));
  }
  function deleteProduct(orderAttributes: ProductOrderType) {
    dispatch(deleteProductAction(orderAttributes));
  }
  function increaseProductAmount(orderAttributes: ProductOrderType) {
    dispatch(increaseProductAction(orderAttributes));
  }
  function decreaseProductAmount(orderAttributes: ProductOrderType) {
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
        tagsToFilter,
        addNewProduct,
        deleteProduct,
        setTagsToFilter,
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
