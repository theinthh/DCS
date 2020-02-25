import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter as Router } from "react-router-dom";
//ReactDOM.render(<Years />, document.getElementById("root"));
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
); //ReactDOM.render(<StudentInfo />, document.getElementById("root"));
