/**
 * Libraries required
 */
import React from "react";
import "./index.css";


export const Calculator = () => {

    const tester = (x) => {
        // e.preventDefault();
        console.log(x, "yesss")
        // to pass an argument i need to place function in a hook? 
    }


    return (
        <div id="containerCalculator" className="container">
            <main className="container ">
                <div className="row " id="calculatorScreen">
                </div>
                <div id="calculatorButtons" className="container ">
                    <div className="d-flex flex-row bd-highlight">
                        <div className="p-2 h2 col-4" onClick={()=>{tester(1)}}>1</div>
                        <div className="p-2 h2 col-4" onClick={()=>{tester(2)}}>2</div>
                        <div className="p-2 h2 col-4" onClick={()=>{tester(3)}}>3</div>
                    </div>
                    <div className="d-flex flex-row bd-highlight">
                        <div className="p-2 h2 col-4" onClick={()=>{tester(4)}}>4</div>
                        <div className="p-2 h2 col-4" onClick={()=>{tester(5)}}>5</div>
                        <div className="p-2 h2 col-4" onClick={()=>{tester(6)}}>6</div>
                    </div>
                    <div className="d-flex flex-row bd-highlight">
                        <div className="p-2 h2 col-4" onClick={()=>{tester(7)}}>7</div>
                        <div className="p-2 h2 col-4" onClick={()=>{tester(8)}}>8</div>
                        <div className="p-2 h2 col-4" onClick={()=>{tester(9)}}>9</div>
                    </div>
                    <div className="d-flex flex-row bd-highlight">
                        <div className="p-2 h2 col-4" onClick={()=>{tester('+')}}>+</div>
                        <div className="p-2 h2 col-4" onClick={()=>{tester(0)}}>0</div>
                        <div className="p-2 h2 col-4" onClick={()=>{tester('-')}}>-</div>
                    </div>
                    <div className="d-flex flex-row bd-highlight">
                        <div className="p-2 h2">Enter</div>
                    </div>
                </div>
            </main>

        </div>
    );
};
