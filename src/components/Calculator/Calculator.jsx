/**
 * Libraries required
 */
import React from "react";
import "./index.css";
// import $ from "jquery";
import { ADJUSTVALUES, ADDVALUES } from "../Utilities/functions";

export const Calculator = () => {

    return (
        <div id="containerCalculator" className="container">
            <main className="container ">
                <div className="row" id="calculatorScreen">
                    <div id="calculatorScreenLeft" className="col-6 d-flex justify-content-end flex-column
                    ">
                        <div className="row overflow-auto">
                            <div id="userItemsList" className="col-12">
                                Items
                            </div>
                            <div id="userItemPrice" className="col-12 border-top">0.00</div>
                        </div>
                    </div>
                    <div id="calculatorScreenRight" className="col-6 border border-primary">
                        <div id="userItemsQuantity " className="row">Item Count:</div>
                        <div id="userItemsPrice" className="row">Items Total:</div>
                    </div>
                </div>
                <div id="calculatorButtons" className="container ">
                    <div className="d-flex flex-row bd-highlight">
                        <div id="buttonOne" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonOne") }}>1</div>
                        <div id="buttonTwo" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonTwo") }}>2</div>
                        <div id="buttonThree" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonThree") }}>3</div>
                    </div>
                    <div className="d-flex flex-row bd-highlight">
                        <div id="buttonFour" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonThree") }}>4</div>
                        <div id="buttonFive" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonFive") }}>5</div>
                        <div id="buttonSix" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonSix") }}>6</div>
                    </div>
                    <div className="d-flex flex-row bd-highlight">
                        <div id="buttonSeven" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonSeven") }}>7</div>
                        <div id="buttonEight" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonEight") }}>8</div>
                        <div id="buttonNine" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonNine") }}>9</div>
                    </div>
                    <div className="d-flex flex-row bd-highlight">
                        <div id="" className="p-2 h2 col-4"></div>
                        <div id="buttonZero" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonZero") }} >0</div>
                        <div id="" className="p-2 h2 col-4"></div>
                    </div>
                    <div className="d-flex flex-row bd-highlight">
                        <div id="buttonAdd" className="p-2 h2 col-4"  onClick={() => { ADDVALUES() }}>+</div>
                        <div id="buttonMinus" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonMinus") }}>-</div>
                        <div id="buttonDecimal" className="p-2 h2 col-4" onClick={() => { ADJUSTVALUES("buttonDecimal") }}>.</div>
                    </div>
                    <div className="d-flex flex-row bd-highlight">
                        <div className="p-2 h2">Enter</div>
                    </div>
                </div>
            </main>

        </div>
    );
};
