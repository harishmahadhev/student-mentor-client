import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
  BrowserRouter as Router, Route, Switch,
} from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Switch>
        <Route path="/"><App /></Route>
      </Switch>
<<<<<<< HEAD
=======
    
>>>>>>> c85df83032dd8645cb1cd81a3e5318e945c0843c
    </Router>

  </React.StrictMode>,
  document.getElementById("root")
);
