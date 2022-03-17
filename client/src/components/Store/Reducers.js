// import { PURCHASE, WELCOME, PAYMENT, RECEIPT } from "./ActionTypes";
import * as actType from "./ActionTypes"
import { EmployeeStore } from "./EmployeeStore";

export const purchaseReducer = (store = EmployeeStore, action) => {
    switch (action.type) {
        case actType.PURCHASE:
            // console.log(action.payload, "action.payload from purchase");
            return {
                ...store,
                Transactions: action.payload
            };
        default:
            // console.log(store,"this is the default in purchaseReducer");
            return store
    };
};
let initialStore = {
    display: "welcome"
}
export const ComponentReducer = (store = initialStore, action) => {
    switch (action.type) {
        // case actType.WELCOME:
        //     console.log(" this is the welcome action type")
        //     return {
        //         ...store,
        //         display: "WELCOME"
        //     }
        // case actType.CALCULATOR:
        //     console.log(" this is the calculator action type")

        //     return {
        //         ...store,
        //         dispaly: "CALCULATOR"
        //     }
        // case actType.RECEIPT:
        //     console.log(" this is the receipt action type")

        //     return {
        //         ...store,
        //         display: "RECEIPT"
        //     }
        case actType.PAYMENT:
        //    console.log(action," this is the payment action")
           
            return {
                ...store,
                display: action.payload
            }
        // case actType.PURCHASE:
        //     console.log(" this is the purchase action type")

        //     return {
        //         ...store,
        //         "display": "PURCHASE"
        //     }
        default:
            // console.log(store, " this is the default action type from display reducer")
            return store
    }

};


