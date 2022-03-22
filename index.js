const buttonZero = document.querySelector("#buttonZero")
const buttonOne = document.querySelector("#buttonOne")
const buttonTwo = document.querySelector("#buttonTwo")
const buttonThree = document.querySelector("#buttonThree")
const buttonFour = document.querySelector("#buttonFour")
const buttonFive = document.querySelector("#buttonFive")
const buttonSix = document.querySelector("#buttonSix")
const buttonSeven = document.querySelector("#buttonSeven")
const buttonEight = document.querySelector("#buttonEight")
const buttonNine = document.querySelector("#buttonNine")
const buttonDecimal = document.querySelector("#buttonDecimal")
const buttonPlus = document.querySelector("#buttonPlus")
const buttonMinus = document.querySelector("#buttonMinus")
const buttonTotal = document.querySelector("#buttonTotal")
const moneyInitial = document.querySelector(".moneyInitial")
const moneyUpdated = document.querySelector(".moneyUpdated");
const moneyTotal = document.querySelector(".moneyTotal")
const reciept = document.querySelector(".reciept")
const paymentContainer = document.querySelector('.paymentContainer')
const paymentReceivedTotal = document.querySelector('.paymentReceivedTotal')
const paymentChangeTotal = document.querySelector('.paymentChangeTotal');
const giveCustomer = document.querySelector('.giveCustomer')
let totalNumbers = [];
let totalPrice;

let userPaymentValues = {
    'Hundreds': 0,
    'Fifties': 0,
    'Twenties': 0,
    'Tens': 0,
    'Fives': 0,
    'Ones': 0,
    'Quarters': 0,
    'Dimes': 0,
    'Nickels': 0,
    'Pennies': 0
};
let customerChangeValues = [];
let userPaymentArray = [];
let userPayementTotal;

let moneyValues = {
    'Hundreds': 100.00,
    'Fifties': 50.00,
    'Twenties': 20.00,
    'Tens': 10.00,
    'Fives': 5.00,
    'Ones': 1.00,
    'Quarters': 0.25,
    'Dimes': 0.10,
    'Nickels': 0.05,
    'pennies': 0.01
}

let cashRegister = {
    'Hundreds': 5,
    'Fifties': 5,
    'Twenties': 10,
    'Tens': 15,
    'Fives': 20,
    'Ones': 40,
    'Quarters': 40,
    'Dimes': 40,
    'Nickels': 40,
    'pennies': 40
};
let cashRegisterValue = [];

function adjustValues(x) {
    if (moneyInitial.innerText === "Welcome" || moneyInitial.innerText === "0") {
        moneyInitial.innerText = x
    }
    else {
        let valueInitial = moneyInitial.innerText
        let valueUpdated = valueInitial.concat(x)
        moneyInitial.innerText = valueUpdated
    }
};

function addDecimal() {
    let decimal = "."
    let valueUpdated = moneyInitial.innerText.concat(decimal)
    moneyInitial.innerText = valueUpdated
};

function addValues() {
    let firstValue = Number(moneyInitial.innerText)
    totalNumbers.push(firstValue);
    let total = totalNumbers.reduce((x, y) => x + y).toFixed(2)

    moneyUpdated.innerText = firstValue
    moneyInitial.innerText = 0;
    moneyTotal.innerText = '$' + total
};

function minusValues() {
    if (moneyInitial.innerText === '0' || moneyInitial.innerText === 'Welcome') {
        moneyInitial.innerText = '-'
    } else {
        let firstValue = Number(moneyInitial.innerText)
        totalNumbers.push(firstValue);
        let total = totalNumbers.reduce((x, y) => x + y).toFixed(2)
        moneyUpdated.innerText = firstValue
        moneyInitial.innerText = '-';
        moneyTotal.innerText = '$' + total
    }
};

function totalValue() {
    document.querySelector(".registerButtons").style.display = "none";
    console.log('totalvalue func running')
    // if (reciept.childNodes.length > 0) {
    //     console.log('inside if of totalvalue func')
    //     reciept.removeChild('list');
    // };
    let firstValue = Number(moneyInitial.innerText)
    totalNumbers.push(firstValue);
    totalPrice = totalNumbers.reduce((x, y) => x + y).toFixed(2);
    // totalPrice = '$' + totalPrice
    if (totalPrice[0] === '-') {
        total = total.split('-')
        console.log('????', total[1], '!!!')
        total = '- ' + total[1]
        // total = '- ' + "$" + total[1]
        console.log(total, "inside the if")
    };
    moneyUpdated.innerText = "Items: " + totalNumbers.length;
    moneyInitial.innerText = 'Employee: Franklin';
    moneyTotal.innerText = 'Total: $' + totalPrice;
    document.querySelector(".recieptContainer").style.display = 'block';
    console.log('totalnumbers inside total value', totalNumbers)
    console.log(totalPrice, 'the final total price')
    recieptMaker()
};

function recieptMaker() {

    // 
    if (reciept.childNodes.length > 0) {
        console.log(reciept, 'the reciept')
        console.log(reciept.childNodes, " not equal children")
        let oldItems = document.reciept.querySelectorAll('li')
        console.log(oldItems, 'oldintems')
        oldItems.forEach(child => reciept.removeChild(child));
    };

    totalNumbers.map((x, y) => {
        let itemNumber = y + 1;
        let itemAmount = "$" + x.toFixed(2);
        if (itemAmount[1] === '-') {
            itemAmount = itemAmount.split('-')
            itemAmount = '- ' + "$" + itemAmount[1]
        };
        let list = document.createElement('li');
        list.className = 'recieptItems';
        list.id = 'item-' + itemNumber;
        reciept.appendChild(list);
        let price = document.createTextNode(itemAmount);
        list.appendChild(price);
        let itemId = list.id
        // list.onclick(deleteItem(itemId))
        list.addEventListener('click', () => {
            deleteItem(itemId)
        })
    });

};

function deleteItem(x) {
    // console.log(x, 'indside onclick working')
    // console.log(totalNumbers, 'totalnumbers')
    let listItem = document.querySelector(`#${x}`)
    // console.log(listItem)
    listItem.remove()
    //use regEx to grab list number from ItemId to use to remove item from totalNumbers
    let regEx = /[0-9]+/
    // let regEx = /d/ would return null and idk why
    const ID = x
    let itemIndex = ID.match(regEx)[0]
    // console.log(itemIndex, 'firstttt')
    newTotal(itemIndex)


};

function newTotal(listNumber) {
    // console.log(listNumber, 'wwwwwwwwww')


    totalNumbers.splice(listNumber - 1, 1)

    let total = totalNumbers.reduce((x, y) => x + y).toFixed(2);
    total = '$' + total

    if (total[1] === '-') {
        total = total.split('-')
        console.log('????', total[1], '!!!')
        total = '- ' + "$" + total[1]
        // console.log(total, "inside the if")
    };
    moneyUpdated.innerText = "Items: " + totalNumbers.length;
    moneyInitial.innerText = 'Employee: Franklin';
    moneyTotal.innerText = 'Total: ' + total;
    document.querySelector(".recieptContainer").style.display = 'block';

    recieptMaker()
};

function addItems() {
    console.log('addition button working');
    document.querySelector(".recieptContainer").style.display = 'none';
    reciept.innerText = '';
    document.querySelector(".registerButtons").style.display = "block";
    moneyInitial.innerText = 0;
};

function totalCorrect() {
    paymentContainer.style.display = 'block'
};

function cashRegisterTotal() {

    // there has to be a better way to do this!!!

    for (x = 0; x < Object.values(cashRegister).length; x++) {
        console.log(x)
        let numericalValues = Object.values(cashRegister)[x] * Object.values(moneyValues)[x]
        cashRegisterValue.push(numericalValues)
    }
    cashRegisterValue = cashRegisterValue.reduce((x, y) => x + y).toFixed(2)
    //   console.log(cashRegisterValue, 'values')
};

function fillCashRegister() {
    cashRegisterTotal()

    //  console.log()

};

function paymentReceived(paymentValue) {
    userPaymentValues[paymentValue] = userPaymentValues[paymentValue] + 1
    console.log(userPaymentValues)

    // userPayementTotal = userPaymentArray.reduce((x, y) => x + y)
    userPaymentTotal()
};

function userPaymentTotal() {
    userPayementTotal = 0
    userPaymentArray = []
    for (x = 0; x < Object.values(userPaymentValues).length; x++) {
        let usePaidValues = Object.values(userPaymentValues)[x] * Object.values(moneyValues)[x]
        userPaymentArray.push(usePaidValues);
    }
    userPayementTotal = userPaymentArray.reduce((x, y) => x + y).toFixed(2)
    console.log('userPayementTotal', userPayementTotal)
    console.log('userPaymentArray', userPaymentArray)
    paymentReceivedTotal.innerText = "Received: " + userPayementTotal;

    customerChange()
};

function customerChange() {
    console.log('customer change function working')
    if (giveCustomer.childNodes.length > 0) {
        console.log(giveCustomer, 'give customer')
        console.log(giveCustomer.childNodes, " not equal children")
        let oldQuantities = giveCustomer.querySelectorAll('li')
        console.log(oldQuantities, 'oldQuantities')
        oldQuantities.forEach(child => giveCustomer.removeChild(child));
    };
    
    // if i remove the number it will cause an error, will only work with mutiple items and not just one
    if (Number(userPayementTotal) >= Number(totalPrice)) {

        let change = userPayementTotal - totalPrice
        paymentChangeTotal.innerText = '$ ' + change.toFixed(2)
        // console.log('working fine!!!!')
        changeValues(change)
        console.log(customerChangeValues, 'customerChangeValues')
    }

    customerChangeValues.map((x) => {


        let moneyQuantity = document.createElement('li');
        moneyQuantity.innerText = x[0] +' : ' + x[1];
        giveCustomer.appendChild(moneyQuantity);
  
        // list.appendChild(price);
        // let itemId = list.id
        // list.onclick(deleteItem(itemId))    
    })
    
};

function changeValues(change){
//   console.log(userPaymentArray ,'userPaymentArray')
//   console.log(userPaymentValues ,'userPaymentValues')
console.log('change values function running')
customerChangeValues = []
  Object.entries(moneyValues).forEach((x, y)=>{
      console.log(x,' x in for each')
      console.log(y,' yin for each')

      let quantity = Math.trunc(change/x[1])
      change = change - (quantity * x[1])
    //   console.log(leftover, 'leftover')
      console.log(change, 'change')
      if(quantity !== 0){
       x[1] = quantity

       //    console.log(customerChangeValues, 'customerChangeValues')
          customerChangeValues.push(x)
          console.log(customerChangeValues, 'customerChangeValues after')


    }
    // leftover -= change
    // //   console.log(y,'in for each is the index')
    // //   console.log(Object.values(customerChangeValues)[y], 'before')
    // console.log(leftover, 'leftover')
    //   Object.entries(customerChangeValues)[y][1] = leftover
    //   console.log(  Object.entries(customerChangeValues)[y][1])
    //   console.log('after')
    //   customerChange -=  Object.values(customerChangeValues)[y]

    })
//   console.log(customerChangeValues , 'customerChangeValue')
}

console.log('JS connected')