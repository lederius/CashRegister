/**
 * Libraries required
 */
import React from "react";
import { Provider } from "react-redux";
import { Store } from "./components/Store/index"

/**
 * Custom components
 */

// import { Welcome } from "./components/Welcome/Welcome"
import { Calculator } from "./components/Calculator/Calculator";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import { Receipt } from "./components/Receipt/Receipt.jsx";  // why do i need jsx here and nowhere else???
import { Payment } from "./components/Payment/Payment";


export const App = () => {
  return (
    <div>
      <Provider store={ Store } >
      {/* <Header  /> */}
      {/* <Welcome /> */}
      {/* <Calculator  /> */}
      <Payment />
      {/* <Receipt /> */}
      {/* <Footer /> */}
      </Provider >
    </div>
  );
};
