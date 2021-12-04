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
<<<<<<< HEAD
import Register from './views/Register';
=======
import SignIn from './views/SignIn'
import Form from './components/Form';
>>>>>>> 1653ec7ab6889c8afa63ba18839e7205879b3d5b


const App = () => {
  const basename = process.env.BASENAME || "";
  return (
    <Router basename={basename}>
      <Sidebar />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/squads">
          <Squads />
        </Route>
        <Route exact path="/players">
          <Players />
        </Route>
        <Route exact path="/signin">
          <SignIn />
        </Route>
        <Route exact path="/form">
          <Form />
        </Route>
        <Route exact path="/popular">
          <Popular />
        </Route>
        <Route exact path="/userconfig">
          <UserConfig />
        </Route>
        <Route exact path="/register">
          <Register />
        </Route>
      </Switch>
    </Router >
  );
}

export default injectContext(App);



