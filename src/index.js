import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Game from "./components/game"
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById("root"));

ReactDOM.render(<Game />, document.getElementById("root"));

serviceWorker.unregister();
