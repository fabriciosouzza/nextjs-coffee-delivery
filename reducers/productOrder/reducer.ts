import { productOrderType } from "@/utils/models";
import { ActionTypes } from "./actions";

export function productOrderReducer(state: productOrderType[], action: any) {
  switch (action.type) {
    case ActionTypes.ADD_NEW_PRODUCT:
      if (state.find((product) => product.id === action.payload.id)) {
        let updatedState = state.map((productState) => {
          if (productState.id === action.payload.id) {
            return {
              ...productState,
              amount: (productState.amount += action.payload.amount),
            };
          }
          return productState;
        });

        return updatedState;
      } else {
        return [...state, action.payload];
      }
    case ActionTypes.INCREASE_PRODUCT_AMOUNT:
      let updatedIncreasedState = state.map((productState) => {
        if (productState.id === action.payload.id) {
          return {
            ...productState,
            amount: (productState.amount += action.payload.amount),
          };
        }
        return productState;
      });

      return updatedIncreasedState;
    case ActionTypes.DECREASE_PRODUCT_AMOUNT:
      let updatedDecreasedState = state.map((productState) => {
        if (productState.id === action.payload.id) {
          return {
            ...productState,
            amount: ((productState.amount as number) -= action.payload.amount),
          };
        }
        return productState;
      });
      return updatedDecreasedState.filter(
        (product) => (product.amount as number) > 0
      );
    case ActionTypes.DELETE_PRODUCT:
      return state.filter((product) => product.id !== action.payload.id);
    case ActionTypes.CLEAN_PRODUCT_LIST:
      return [];
    default:
      return state;
  }
}
