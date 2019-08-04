import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./components/Home";
import "semantic-ui-css/semantic.min.css";

render(
    <BrowserRouter basename={process.env.BASE}>
        <Switch>
            <Route path="/" component={Home} exact />
        </Switch>
    </BrowserRouter>
    , document.getElementById("app"));
