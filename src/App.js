import React, { Fragment } from 'react';
import GlobalStyle from './styles/global';
import Home from './pages/Home';
import Routes from './routes';


const App = () => (
  <Fragment>
    <GlobalStyle />
    {/* <Home /> */}
    <Routes />
  </Fragment>
);

export default App;
