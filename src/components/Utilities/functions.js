import $ from "jquery";
import { totalNumbers } from "./variables"
// uses element Id to return that entire element 
export const GETELEMENT = (id) => { let selectedElement = $(`#${id}`);return selectedElement };

// returns the text from element with the userItemPrice id
export const USERITEMPRICE = () =>{ let userItemPrice = $("#userItemPrice").text(); return userItemPrice};

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
    let firstValue = Number(USERITEMPRICE())
    console.log(firstValue, "firstValue in addValues")
    totalNumbers.push(firstValue);
    let total = totalNumbers.reduce((x, y) => x + y).toFixed(2)
console.log(total, "total")
    // moneyUpdated.innerText = firstValue
    GETELEMENT("userItemPrice").text("0.00");
    GETELEMENT("userItemsPrice").text('Items Total: $ ' + total);
};

// export const MINUSVALUES = () =>  {

//     // GETELEMENT("userItemPrice").text("$0.00 -");
//         let firstValue = Number(GETELEMENT("userItemPrice").text());
//         totalNumbers.push(firstValue);
//         let total = totalNumbers.reduce((x, y) => x + y).toFixed(2)
//         moneyUpdated.innerText = firstValue
//         moneyInitial.innerText = '-';
//         moneyTotal.innerText = '$' + total

// };