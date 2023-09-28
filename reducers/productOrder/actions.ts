import { productOrderType } from "@/utils/models"

export enum ActionTypes {
    ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT',
    INCREASE_PRODUCT_AMOUNT = 'INCREASE_PRODUCT_AMOUNT',
    DECREASE_PRODUCT_AMOUNT = 'DECREASE_PRODUCT_AMOUNT',
    DELETE_PRODUCT = 'DELETE_PRODUCT',
}

export function addNewProductAction(orderAttributes: productOrderType) {
    return {
        type: ActionTypes.ADD_NEW_PRODUCT,
        payload: {
            orderAttributes,
        }
    }
}
export function deleteProductAction() {
    return {
        type: ActionTypes.DELETE_PRODUCT,
    }
}
export function increaseProductAction() {
    return {
        type: ActionTypes.INCREASE_PRODUCT_AMOUNT,
    }
}
export function decreaseProductAction() {
    return {
        type: ActionTypes.DECREASE_PRODUCT_AMOUNT,
    }
}