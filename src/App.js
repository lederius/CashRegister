/**
 * Libraries required
 */
import React from "react";


/**
 * Custom components
 */

// import { Welcome } from "./components/Welcome/Welcome"
import { Calculator } from "./components/Calculator/Calculator";
import { Header } from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer"


export const App = () => {
  return (
    <div>

      <Header />
      {/* <Welcome /> */}
      <Calculator />
      {/* <Footer /> */}
    </div>
  );
};
