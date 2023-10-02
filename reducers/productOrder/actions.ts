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
            id: orderAttributes.id,
            name: orderAttributes.name,
            price: orderAttributes.price,
            image: orderAttributes.image,
            amount: orderAttributes.amount
        }
    }
}
export function deleteProductAction(orderAttributes: productOrderType) {
    return {
        type: ActionTypes.DELETE_PRODUCT,
        payload: {
            id: orderAttributes.id,
            name: orderAttributes.name,
            price: orderAttributes.price,
            image: orderAttributes.image,
            amount: orderAttributes.amount
        }
    }
}
export function increaseProductAction(orderAttributes: productOrderType) {
    return {
        type: ActionTypes.INCREASE_PRODUCT_AMOUNT,
        payload: {
            id: orderAttributes.id,
            name: orderAttributes.name,
            price: orderAttributes.price,
            image: orderAttributes.image,
            amount: orderAttributes.amount
        }
    }
}
export function decreaseProductAction(orderAttributes: productOrderType) {
    return {
        type: ActionTypes.DECREASE_PRODUCT_AMOUNT,
        payload: {
            id: orderAttributes.id,
            name: orderAttributes.name,
            price: orderAttributes.price,
            image: orderAttributes.image,
            amount: orderAttributes.amount
        }
    }
}