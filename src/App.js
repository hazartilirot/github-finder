import React from "react";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Alert from "./components/layout/Alert";
import About from "./components/pages/About";
import User from "./components/users/User";
import Home from "./components/pages/Home";
import NotFound from "./components/pages/NotFound"

import GithubState from "./context/github/GithubState";
import AlertState from "./context/alert/AlertState";

import "./App.css";

const App = () => {
  return (
      <GithubState>
        <AlertState>
          <BrowserRouter>
            <div className="App">
              <Navbar/>
              <div className="container">
                <Alert/>
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact path="/user/:login" component={User} />
                  <Route component={NotFound} />
                </Switch>
              </div>
            </div>
          </BrowserRouter>
        </AlertState>
      </GithubState>
  );
};
export default App;
