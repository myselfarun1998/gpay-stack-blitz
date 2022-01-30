import React, { useState } from 'react';

import Bank from './Component/Bank';
import Phone from './Component/Phone';
import Home from './Component/Home';
import Banksuccess from './Component/Banksuccess';

import Phonesuccess from './Component/Phonesuccess';
import Upisuccess from './Component/Upisuccess';
import Phonesuccess from './Component/Phonesuccess';
import Password from './Component/Password';

import Test from './Component/Test';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Upi from './Component/Upi';

export default function App() {
  return (
    <div>
      {/* <Bank /> */}
      {/* <Banksuccess /> */}
      {/* <Phone /> */}
      {/* <Phonesuccess /> */}
      {/* <Upi /> */}
      {/* <Upisuccess /> */}
      {/* <Password /> */}
      {/* <Home /> */}
      {/* <Test /> */}

      <Router>
        <Switch>
          <Route path="/upi">
            <Upi />
          </Route>
          <Route path="/bank">
            <Bank />
          </Route>
          <Route path="/phone">
            <Phone />
          </Route>
          <Route path="/phonesuccess">
            <Phonesuccess />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
