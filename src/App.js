import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Index from "./components/Index";
import Login from "./components/Login";
import RegistroCli from "./components/RegistroCli";
import RegistroProv from "./components/RegistroProv";
import HomeC from "./components/HomeC";
import HomeProv from "./components/HomeProv";
import Error from "./components/Error";
import Navigation from "./components/Navigation";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
              <Route path="/" component={Index} exact />
              <Route path="/login" component={Login} />
              <Route path="/registroCli" component={RegistroCli} />
              <Route path="/registroProv" component={RegistroProv} />
              <Route path="/homeC" component={HomeC} />
              <Route path="/homeProv" component={HomeProv} />
              <Route component={Error} />
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
};

export default App
