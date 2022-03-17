import { PURCHASE, PAYMENT } from "./ActionTypes";

export const ItemPurchase = (item) => {
    return {
        type: PURCHASE,
        payload: item
    }
};

export const changeComponent = (component) => {
    return {
        type: PAYMENT,
        payload: component
    }
}