/**
 * Libraries required
 */
import React from "react";
import "./index.css";


export const Welcome = () => {

    const logIn = (e) => {
        e.preventDefault()
        console.log('login fucntion works');
     };

    return (
        <div id="containerWelcome">
            <h1 className="welcomeHeader">Cash'n</h1>
            <div id="containerLogIn" className='container'>
                <div className="form">
                    <div className="form-group">
                        <label for="employeeId">Employee ID</label>
                        <input type="number" id="employeeId" className="form-control" placeholder="Enter ID" />
                    </div>
                    <div className="form-group">
                        <label for="employeePassword">Passowrd</label>
                        <input type="text" id="employeePassword" className="form-control" placeholder="Password" />
                    </div>
                    <button type="submit" class="btn btn-primary" onClick={logIn}>Login</button>
                </div>
            </div>

        </div>
    );
};
