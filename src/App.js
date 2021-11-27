import './App.css';
import React from "react";
import Sidebar from './components/Sidebar'
import {
  BrowserRouter as Router, Switch,
  Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.bundle.min'
import injectContext from './store/AppContext';  //store
import Home from './views/Home' //views
import Players from './views/Players'
import Squads from './views/Squads'
import UserConfig from './views/UserConfig'
import Popular from './views/Popular'


const App = () => {
  const basename = process.env.BASENAME || "";
  return (
    <Router basename={basename}>
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/popular">
          <Popular />
        </Route>
        <Route exact path="/players">
          <Players />
        </Route>
        <Route exact path="/squads">
          <Squads />
        </Route>
        <Route exact path="/userconfig">
          <UserConfig />
        </Route>
      </Switch>
    </Router >
  );
}

export default injectContext(App);



