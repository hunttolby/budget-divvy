import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch
} from "react-router-dom"

import Transactions from "./containers/Transactions.js"

import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" render={props =>
              <div>
                <Transactions location={props.location}/>
              </div>
            } />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
