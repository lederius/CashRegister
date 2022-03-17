/**
 * Libraries required
 */
import "./index.css";
import React from "react";
import { useDispatch, useSelector } from 'react-redux';
import { ADJUSTVALUES, MINUSVALUES, USERITEMPRICE, GETELEMENT } from "../Utilities/functions";
import { totalNumbers } from "../Utilities/variables";
import { ItemPurchase, changeComponent } from "../Store/ActionCreator";
import { Payment } from "../Payment/Payment";
import $ from "jquery"

export const Calculator = () => {

    const state = useSelector(state => state);
    let dispatch = useDispatch();
    let componentDisplay = state.renderComponent.display;
    let customerItems = [];
    let items = {
        "totalPrice": 0,
        "totalItmes": [],
        "allItems": customerItems
    }
    let total;
    // if i am passing state as values, then can I make them variables instead? yes, havent done it yet;

    // adds the values of each item into one total while setting the value for customerItems and itemsAmount;
    const ADDVALUES = () => {
        if (USERITEMPRICE() !== "0.00") {
            let firstValue = Number(USERITEMPRICE());
            totalNumbers.push(firstValue);
            total = totalNumbers.reduce((x, y) => x + y).toFixed(2)
            GETELEMENT("userItemPrice").text("0.00");
            GETELEMENT("userItemsPrice").text('Items Total: $ ' + total);
            GETELEMENT("userItemsQuantity").text("Item Count: " + totalNumbers.length);
            let itemListNumber = totalNumbers.length - 1;
            items["totalItmes"] = totalNumbers.length
            let item = [
                itemListNumber,
                "$" + firstValue.toFixed(2),
                "unaltered"
            ] //[item list number, price of item, status of item]
            items["totalItmes"] = totalNumbers.length - 1;
            customerItems.push(item);
        };
        console.log(customerItems, "the customer items");
        $('#userItemsList').empty();
        let results = customerItems.map((x, y) => {

            let itemIndex = x[0], itemPrice = x[1];
            $('#userItemsList').append(`<li id=itemIndex-${itemIndex} className="listItems">${itemPrice}</li>`)
        })
        return total, results;
    };
    // grabs the price for each item from the customerItems state to reduce 
    const CUSTOMERTOTALPRICE = () => {
        // need to map items into the div containing all the items
        if (USERITEMPRICE() !== "Final Total") {
            let firstValue = Number(USERITEMPRICE());
            totalNumbers.push(firstValue);
            total = totalNumbers.reduce((x, y) => x + y).toFixed(2)
            GETELEMENT("userItemPrice").text("Final Total");
            GETELEMENT("userItemsPrice").text('Items Total: $ ' + total);
            GETELEMENT("userItemsQuantity").text("Item Count: " + totalNumbers.length);
            let itemListNumber = totalNumbers.length - 1;
            //     //setItemsAmount(1 + itemsAmount) // increases item count;
            items["totalItmes"] = totalNumbers.length
            let item = [
                itemListNumber,
                "$" + firstValue.toFixed(2),
                "unaltered"
            ] //[item list number, price of item, status of item]
            items["totalItmes"] = totalNumbers.length
            customerItems.push(item)
        }
        items["totalPrice"] = "$" + total;
        // at this point everything should be added into the items varible ready for dispatch to the reducer;
        dispatch(changeComponent("PAYMENT"));
        dispatch(ItemPurchase(items));
    }
    let tester = () => { console.log(state, " the state on calculator") };

    return (
        componentDisplay === "PAYMENT" ? <Payment /> : (
            <div id="containerCalculator" className="container ">
                <main className="container ">
                    <div className="row" id="calculatorScreen">
                        <div id="calculatorScreenLeft" className="col-6 d-flex justify-content-end flex-column">
                            <div className="row overflow-auto">
                                <ol id="userItemsList" className="col-12 text-wrap">
                                    Items
                                </ol>
                                {/* when userItemList ol container it will push userItemPrice out the way, and gets wierdly blurry */}
                                <div id="userItemPrice" className="col-12 border-top">0.00</div>
                            </div>
                        </div>
                        <div id="calculatorScreenRight" className="col-6 border border-primary">
                            <div id="userItemsQuantity" className="row">Item Count:</div>
                            <div id="userItemsPrice" className="row">Items Total:</div>
                        </div>
                    </div>
                    <div id="calculatorButtons" className="container ">
                        <div id="calculatorButtonsRow1" className="d-flex flex-row bd-highlight">
                            <div id="buttonTwo" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonTwo") }}>2</div>
                            <div id="buttonOne" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonOne") }}>1</div>
                            <div id="buttonThree" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonThree") }}>3</div>
                        </div>
                        <div id="calculatorButtonsRow2" className="d-flex flex-row bd-highlight">
                            <div id="buttonFour" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonFour") }}>4</div>
                            <div id="buttonFive" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonFive") }}>5</div>
                            <div id="buttonSix" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonSix") }}>6</div>
                        </div>
                        <div id="calculatorButtonsRow3" className="d-flex flex-row bd-highlight">
                            <div id="buttonSeven" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonSeven") }}>7</div>
                            <div id="buttonEight" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonEight") }}>8</div>
                            <div id="buttonNine" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonNine") }}>9</div>
                        </div>
                        <div id="calculatorButtonsRow4" className="d-flex flex-row bd-highlight">
                            <div id="" className="p-2 h2 col-4"></div>
                            <div id="buttonZero" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonZero") }} >0</div>
                            <div id="" className="p-2 h2 col-4"></div>
                        </div>
                        <div id="calculatorButtonsRow5" className="d-flex flex-row bd-highlight">
                            <div id="buttonAdd" className="p-2 h2 col-4" onClick={() => { ADDVALUES() }}>+</div>
                            <div id="buttonMinus" className="p-2 h2 col-4" onClick={() => { MINUSVALUES() }}>-</div>
                            <div id="buttonDecimal" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonDecimal") }}>.</div>
                        </div>
                        <div id="calculatorButtonTotal" className="d-flex flex-row bd-highlight">
                            <div className="p-2 h2" onClick={() => { CUSTOMERTOTALPRICE() }}>Total</div>
                        </div>
                    </div>
                </main>
                <button onClick={tester}>Current State</button>
            </div>
        )
    );
};
