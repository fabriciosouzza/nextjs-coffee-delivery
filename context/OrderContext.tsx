import { addNewProductAction } from "@/reducers/productOrder/actions";
import { productOrderReducer } from "@/reducers/productOrder/reducer";
import { productOrderType } from "@/utils/models";
import { ReactNode, createContext, useReducer, useState } from "react";

export const OrderContext = createContext({} as OrderContextType);

//testar context API com useState salvando lista de café :::::: OK
//alterar useState para useReducer
//Criar tipagem

interface OrderContextProviderProps {
    children: ReactNode
}

interface OrderContextType {
    addNewProduct: (orderAttributes: productOrderType) => void
    productsStates: productOrderType[]
}

// interface productCartOrder {
//     id: number;
//     name: string;
//     price: number;
//     amount: number;
// }

export default function OrderContextProvider({ children }: OrderContextProviderProps) {
    const [productsStates, dispatch] = useReducer(productOrderReducer, [])
    // const [amountOfCoffee, setAmountOfCoffee] = useState<productCartOrder[]>([])

    function addNewProduct(orderAttributes: productOrderType) {
        dispatch(addNewProductAction(orderAttributes))
    }

    // function setAmountCoffee(amount: productCartOrder[]) {
    //     setAmountOfCoffee([...amountOfCoffee, amount])
    // }

    return (
        <OrderContext.Provider value={ {productsStates, addNewProduct} }>
            {children}
        </OrderContext.Provider>
    )
}