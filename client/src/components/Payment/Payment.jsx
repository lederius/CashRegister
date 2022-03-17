import React, { useState, getState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Route, Switch, Redirect }
  from "react-router-dom";
import { Store } from "../Store/index";
import {  cashRegisterValues,userPaymentValues, userPaymentArray, userPaymentTotal, cashRegisterAmount } from "../Utilities/variables";
import $ from "jquery"

export const Payment = () => {
  let dispatch = useDispatch();
  const state = useSelector(state => state);
  const totalPrice = state.customerPurchase.Transactions.totalPrice
  // let registerButtons = Object.values(cashRegisterValues).map(x=>{
  //   // console.log(x, "just x")
  //   console.log(Object.values(x), 'an array of ')
  // })
  
$(document).ready(function(){
  // $("#registerButtonsContainer").append()
  console.log(cashRegisterValues, "testing");
});
  let tester = () => { console.log(cashRegisterValues.Bills, " cashRegisterValues.Bills") };

  return (
    <div id="containerReceipt" className="container mt-5">
      <main id="containerPayment" className="container">
        <div id="paymentTotals" className= "row d-flex justify-content-end flex-column border border-primary ">
          {/* <h1 id="paymentOwed">Total Owed: {totalPrice}</h1> */}
          {/* <h1 id="paymentOwed">Total Owed: $12.08</h1> */}
          <h1 id="paymentGiven">Total Given: </h1>
        </div>
        <div id="registerButtonsContainer" className=" container border border-danger">
          <div id="registerButtonsRow1" className="d-flex flex-row ">
            <div id="buttonHundred" className="p-2 h2 col-4">100</div>
            <div id="buttonFifty" className="p-2 h2 col-4">50</div>
            <div id="buttonTwenty" className="p-2 h2 col-4">20</div>
          </div>
          <div id="registerButtonsRow2" className="d-flex flex-row ">
            <div id="buttonTen" className="p-2 h2 col-4">10</div>
            <div id="buttonFive" className="p-2 h2 col-4">5</div>
            <div id="buttonOne" className="p-2 h2 col-4">1</div>
          </div>   
          <div id="registerButtonsRow3" className="d-flex flex-row ">
            <div id="buttonQuarter" className="p-2 h2 col-4"> 0.25</div>
            <div id="buttonDime" className="p-2 h2 col-4">0.10</div>
            <div id="buttonNickel" className="p-2 h2 col-4">0.05</div>
          </div>
          <div id="registerButtonsRow4" className="d-flex flex-row ">
            <div id="buttonPenny" className="p-2 h2 col-4 ">0.01</div>
          </div>
          {/* long term make this rendered dynamicly by having buttons mapped from the array containing the moneytary units */}
        </div>
      </main>

      <button onClick={tester}>Current State</button>
    </div>
  );
};