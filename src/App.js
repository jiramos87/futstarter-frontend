import './App.css';
import React from "react";
import Sidebar from './components/Sidebar'
import {
  BrowserRouter as Router, Switch,
  Route} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.bundle.min'
//components
import ScrollToTop from './components/ScrollToTop'
import Main from './components/Main'
import Search from './components/Search'
import injectContext from './store/AppContext';  //store


const App = () => {
  const basename = process.env.BASENAME || "";
  return (
    <Router basename={basename}>
      <Sidebar />
      <Switch>

      </Switch>
    </Router >
  );
}

export default injectContext(App);



