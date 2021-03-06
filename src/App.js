import React, { useState, useEffect } from 'react'
import './App.css';
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
import Register from './views/Register'
import Login from './views/Login'
import PlayerCard from './components/PlayerCard'
import PlayerDetails from './views/PlayerDetails'
import SquadCreator from './views/SquadCreator'
import UserSquads from './views/UserSquads'
import LoadingScreen from './views/LoadingScreen'
import Guide from './views/Guide'


const App = () => {
  const basename = process.env.BASENAME || "";
  
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    setTimeout(() => setLoading(false), 4000)
  }, [])
  return (
    <>
      {loading === false ? (
      <Router basename={basename}>
        <Sidebar />
        <div className="row main-row mt-0 pt-0">
          <div className="col-2">
                      
          </div>
          <div className="col-9 px-0 mx-0">
          <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route exact path="/home">
                <Home />
              </Route>
              <Route exact path="/squads">
                <Squads />
              </Route>
              <Route exact path="/guide">
                <Guide />
              </Route>
              <Route exact path="/playercard">
                <PlayerCard />
              </Route>
              <Route exact path="/playerdetails">
                <PlayerDetails />
              </Route>
              <Route exact path="/players">
                <Players />
              </Route>
              <Route exact path="/squadcreator">
                <SquadCreator />
              </Route>
              <Route exact path="/usersquads">
                <UserSquads />
              </Route>
              <Route exact path="/login">
                <Login />
              </Route>
              <Route exact path="/register">
                <Register />
              </Route>
              <Route exact path="/popular">
                <Popular />
              </Route>
            </Switch>
          </div>
          <div className="col-1">
                      
          </div>
        </div>
      </Router >
      ) : (
        <LoadingScreen />
      )}
    </>
  );
}

export default injectContext(App);



