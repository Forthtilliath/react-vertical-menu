import { Redirect, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Html from "../pages/Html";
import Css from "../pages/Css";
import Javascript from "../pages/Javascript";
import Php from "../pages/Php";
import React from "../pages/React";
import ReactNative from "../pages/ReactNative";
import VueJs from "../pages/VueJs";

const Router = () => (
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/html" component={Html} />
        <Route exact path="/css" component={Css} />
        <Route exact path="/javascript" component={Javascript} />
        <Route exact path="/php" component={Php} />
        <Route exact path="/react" component={React} />
        <Route exact path="/native" component={ReactNative} />
        <Route exact path="/vuejs" component={VueJs} />
        <Redirect to="/" />
    </Switch>
);

export default Router;
