import './App.css';
import React from "react";
import {
  BrowserRouter as Router,
 
} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css"
import '@popperjs/core'
import 'bootstrap/dist/js/bootstrap.bundle.min'
//components
import ScrollToTop from './components/ScrollToTop'
import Sidebar from './components/Sidebar'
import Main from './components/Main'
import Search from './components/Search'
import injectContext from './store/AppContext';  //store

const App = () => {
  const basename = process.env.BASENAME || "";
  return (
    <Router basename={basename}>
      <ScrollToTop>
        <div className="container-fluid overflow-hidden bg-black mx-0 px-0">
          <div className="row d-flex flex-row flex-nowrap my-0 py-0">
            <Sidebar />
            <Main />
          </div>
        </div>
      </ScrollToTop>
    </Router >
  );
}

export default injectContext(App);



