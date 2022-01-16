import $ from "jquery";

export let moneyValues = {
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
};
export let cashRegister = {
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
export let cashRegisterValue = [];
export let userPaymentValues = {
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
export let userPaymentArray = [];
export let userChangeValues = [];
export let userPayementTotal;
export let totalNumbers = [];

export const moneyUpdated = document.querySelector(".moneyUpdated");
export const moneyTotal = () => document.querySelector(".moneyTotal");