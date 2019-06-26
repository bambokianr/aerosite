import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import Contato from './pages/Contato';
import AreaMembros from './pages/AreaMembros';
import ApoioPatrocinio from './pages/ApoioPatrocinio';
import IndexAreaMembros from './pages/IndexAreaMembros';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/apoioepatrocinio" component={ApoioPatrocinio} />
      <Route path="/contato" component={Contato} />
      <Route path="/areamembros" component={AreaMembros} />
      <Route path="/indexmembros" component={IndexAreaMembros} />
    </Switch>
  </BrowserRouter>
)

export default Routes;