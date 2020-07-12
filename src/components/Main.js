import React from "react";
import LeftSideBar from "./LeftSideBar";
import Content from "./Content";
import RightSideBar from "./RightSideBar";
import "../css/Main.css";
import { Switch, Route } from "react-router-dom";
import Jobs from "./Jobs";

function Main() {
  return (
    <main className="main-wrapper">
      <LeftSideBar></LeftSideBar>
      <Switch>
        <Route path="/tops" exact>
          <Content></Content>
        </Route>
        <Route path="/" exact>
          <Content></Content>
        </Route>
        <Route path="/jobs" exact>
          <Jobs></Jobs>
        </Route>
      </Switch>

      <RightSideBar></RightSideBar>
    </main>
  );
}

export default Main;
