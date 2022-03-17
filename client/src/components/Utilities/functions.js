import $ from "jquery";
import { totalNumbers } from "./variables"
// uses element Id to return that entire element 
export const GETELEMENT = (id) => { let selectedElement = $(`#${id}`); return selectedElement };

// returns the text from element with the userItemPrice id
export const USERITEMPRICE = () => { let userItemPrice = $("#userItemPrice").text(); return userItemPrice };

// takes the value that is pressed and adds it to the screen to create that price
export const ADJUSTVALUES = (id) => {
    let entireElement = $(`#${id}`)
    let inputValue = entireElement.text()
    let itemPrice = GETELEMENT("userItemPrice")
    if (USERITEMPRICE() === "0.00") {
        GETELEMENT("userItemPrice").text(inputValue)
    }
    else {
        let valueInitial = USERITEMPRICE()
        let valueUpdated = valueInitial.concat(inputValue)
        itemPrice.text(valueUpdated)
    }
};

// adds the values of all the itmes into one total
export const ADDVALUES = () => {
    if (USERITEMPRICE() !== "0.00") {
        let firstValue = Number(USERITEMPRICE())
        let total = totalNumbers.reduce((x, y) => x + y).toFixed(2)
        
        console.log(firstValue, "firstValue in addValues")
        totalNumbers.push(firstValue);
        console.log(totalNumbers, "totalNumber")
        // moneyUpdated.innerText = firstValue
        GETELEMENT("userItemPrice").text("0.00");
        GETELEMENT("userItemsPrice").text('Items Total: $ ' + total);
        GETELEMENT("userItemsQuantity").text("Item Count: " + totalNumbers.length);
    };
};

// this will then give this function to options to either add just the minus sign or run the add value function then add the minus sign
export const MINUSVALUES = () => {
    if (USERITEMPRICE() === "0.00") {
        GETELEMENT("userItemPrice").text("-");
    } else if (USERITEMPRICE() !== "-") {
        ADDVALUES();
        GETELEMENT("userItemPrice").text("-");
        // by running add values then getElement the userItemPrice is changed twice. Once in add values then again with getElement
    }
};

// creates a number that is the total amount of customer items
export const ITEMCOUNT = () => totalNumbers.length;