import React from "react";

import "./App.css";
import News from "./components/News";
import Header from "./Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="container">
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

export default App;
