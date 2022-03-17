import { createStore,  combineReducers, compose, applyMiddleware } from "redux";
import { purchaseReducer, transactionReducer, ComponentReducer } from "./Reducers";
import thunk from "redux-thunk";

const middleware = [thunk];

export const Store = createStore(combineReducers(
    {
    renderComponent: ComponentReducer,
    customerPurchase: purchaseReducer
    // employeeTransactions: transactionReducer,
    // customerTransaction: transactionReducer

     // below allows for the internet terminal to use the redux window tools
    }), {}, compose(
        applyMiddleware(...middleware),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    ));

