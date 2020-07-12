import React from "react";

import "./App.css";

import Header from "./Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <Header></Header>
        <Main></Main>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
