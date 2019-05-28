import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contato from './pages/Contato';
import AreaMembros from './pages/AreaMembros';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/contato" component={Contato} />
      <Route path="/areamembros" component={AreaMembros} />
    </Switch>
  </BrowserRouter>
)

export default Routes;