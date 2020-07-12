import React from "react";
import LeftSideBar from "./LeftSideBar";
import Content from "./Content";
import RightSideBar from "./RightSideBar";
import "../css/Main.css";

function Main() {
  return (
    <main className="main-wrapper">
      <LeftSideBar></LeftSideBar>
      <Content></Content>
      <RightSideBar></RightSideBar>
    </main>
  );
}

export default Main;
