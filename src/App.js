import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HeaderBar from "./components/layout/HeaderBar";
import ProjectBoard from "./components/ProjectBoard";

import store from "./store";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <HeaderBar />
        <Switch>
          <Route exact path="/" component={ProjectBoard} />
        </Switch>
      </Router>
    </Provider>
  );
}

export default App;
