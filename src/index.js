import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter
} from "react-router-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import logService from "./services/logService";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

logService.init();

ReactDOM.render( <
  BrowserRouter > < App / > < /BrowserRouter>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

// start from video 160
// Issue 1-> error when POST with invalid Movie ID
//       2-> Unable to decode name from JWT