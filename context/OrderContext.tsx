import {
  addNewProductAction,
  decreaseProductAction,
  deleteProductAction,
  increaseProductAction,
} from "@/reducers/productOrder/actions";
import { productOrderReducer } from "@/reducers/productOrder/reducer";
import { productOrderType } from "@/utils/models";
import { ReactNode, createContext, useReducer } from "react";

export const OrderContext = createContext({} as OrderContextType);

interface OrderContextProviderProps {
  children: ReactNode;
}

interface OrderContextType {
    productsStates: productOrderType[];
  addNewProduct: (orderAttributes: productOrderType) => void;
  deleteProduct: (orderAttributes: productOrderType) => void;
  increaseProductAmount: (orderAttributes: productOrderType) => void;
  decreaseProductAmount: (orderAttributes: productOrderType) => void;
}

export default function OrderContextProvider({
  children,
}: OrderContextProviderProps) {
  const [productsStates, dispatch] = useReducer(productOrderReducer, []);

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
    <OrderContext.Provider value={{ productsStates, addNewProduct, deleteProduct, increaseProductAmount, decreaseProductAmount }}>
      {children}
    </OrderContext.Provider>
  );
}
