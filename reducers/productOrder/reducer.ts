import { productOrderType } from "@/utils/models";
import { ActionTypes } from "./actions";


export function productOrderReducer(state: productOrderType[] , action: any) {
    switch (action.type) {
        case ActionTypes.ADD_NEW_PRODUCT:
            return [...state, action.payload]
        case ActionTypes.INCREASE_PRODUCT_AMOUNT:
        case ActionTypes.DECREASE_PRODUCT_AMOUNT:
        case ActionTypes.DELETE_PRODUCT:
    
        default:
            return state;
    }
}