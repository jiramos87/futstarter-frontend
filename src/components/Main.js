import React, { useContext } from 'react'
import {
    BrowserRouter as Router,
    Switch, Link,
    Route
} from "react-router-dom";
import Home from '../views/Home' //views
import PlayerDetails from '../views/PlayerDetails'
import Players from '../views/Players'
import Squads from '../views/Squads'
import UserConfig from '../views/UserConfig'
import Popular from '../views/Popular'
import { Context } from '../store/AppContext'

const Main = () => {
    const { store, actions } = useContext(Context)
    return (
        <main className="col ps-md-2 pt-2 mt-0 pt-0">
              <nav className="navbar navbar-light bg-black mt-0 top-0 position-relative">
                <div className="container-fluid d-flex flex-column mb-2">
                  <div className="d-flex flex-row w-100 justify-content-between">
                    
                      <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className="border rounded-3 p-1 text-decoration-none">Menu</a>
                      <h3 className="text-white"> Home </h3>
                      <button id="filters">X</button>
                  
                  </div>
                </div>
                <input className="form-control align-self-center me-2" type="search" placeholder="Search" aria-label="Search" />
              </nav>
              <div className="mt-3 position-relative">
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
              </div>
            </main>
    )
}

export default Main