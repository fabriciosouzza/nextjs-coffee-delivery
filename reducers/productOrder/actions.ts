import { ProductOrderType } from "@/utils/models";

export enum ActionTypes {
  ADD_NEW_PRODUCT = "ADD_NEW_PRODUCT",
  INCREASE_PRODUCT_AMOUNT = "INCREASE_PRODUCT_AMOUNT",
  DECREASE_PRODUCT_AMOUNT = "DECREASE_PRODUCT_AMOUNT",
  DELETE_PRODUCT = "DELETE_PRODUCT",
  CLEAN_PRODUCT_LIST = "CLEAN_PRODUCT_LIST",
}

export function addNewProductAction(orderAttributes: ProductOrderType) {
  return {
    type: ActionTypes.ADD_NEW_PRODUCT,
    payload: {
      id: orderAttributes.id,
      name: orderAttributes.name,
      price: orderAttributes.price,
      image: orderAttributes.image,
      amount: orderAttributes.amount,
    },
  };
}
export function deleteProductAction(orderAttributes: ProductOrderType) {
  return {
    type: ActionTypes.DELETE_PRODUCT,
    payload: {
      id: orderAttributes.id,
    },
  };
}
export function increaseProductAction(orderAttributes: ProductOrderType) {
  return {
    type: ActionTypes.INCREASE_PRODUCT_AMOUNT,
    payload: {
      id: orderAttributes.id,
      amount: orderAttributes.amount,
    },
  };
}
export function decreaseProductAction(orderAttributes: ProductOrderType) {
  return {
    type: ActionTypes.DECREASE_PRODUCT_AMOUNT,
    payload: {
      id: orderAttributes.id,
      amount: orderAttributes.amount,
    },
  };
}

export function cleanProductionAction() {
  return {
    type: ActionTypes.CLEAN_PRODUCT_LIST,
  };
}
