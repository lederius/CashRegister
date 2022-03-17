import $ from "jquery";



export let cashRegisterValues = {
    Bills: {
        'Hundreds': 100,
        'Fifties': 50,
        'Twenties': 20,
        'Tens': 10,
        'Fives': 5,
        'Ones': 1,
    },
    Coins: {
        'Quarters': 0.25,
        'Dimes': 0.10,
        'Nickels': 0.05,
        'Pennies': 0.01
    }
};
export let cashRegisterAmount = {};

export let userPaymentArray = [];
export let userChangeValues = [];
export let userPaymentTotal;

export let totalNumbers = [];

export const moneyUpdated = document.querySelector(".moneyUpdated");
export const moneyTotal = () => document.querySelector(".moneyTotal");