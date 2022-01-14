/**
 * Libraries required
 */
import React from "react";
import "./index.css";

export const Header = () => {



    return (
        <div id="containerHeader" className=" container d-flex flex-row  justify-content-between">
            <div id="employeeName" className="p-2">
                Employee
            </div>
                <button id="settingsButton"><a id="buttonBars" className="fa fa-bars p-2 text-decoration-none"></a></button>
            <div id="settingsListContainer" style={{display:"none"}}>
                <ul>
                    <li className="list-Account">Account</li>
                    <li className="list-Register">Register</li>
                    <li className="list-Settings">Settings</li>
                </ul>
            </div>
        </div>
    );
};
