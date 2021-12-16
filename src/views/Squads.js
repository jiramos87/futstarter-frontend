import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/AppContext'
import PlayerCard from '../components/PlayerCard';
import { Link, useHistory } from 'react-router-dom';
import './Squads.css';
import './LeaguesNavigation.css';
    

const Squads = () => {
    
    const { store, actions } = useContext(Context)
    const [ squad, setSquad ] = useState(store.plSquad)   //this is the real deal
    // const [ squad, setSquad ] = useState(actions.getHardCodedSquad())   // this is only for developing whithout backend
    const history = useHistory()
    console.log('squad.lst :', squad.lst)
    
    const list = document.querySelectorAll('.list');
    function activeLink() {
        list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) =>
    item.addEventListener('click', activeLink));

    return (
        <div className="row"> 

{/* AQUI EMPIEZA EL COMPONENTE LEAGUES NAVIGATION EN VERSION CON BACKEND */}

                    <div className="navigationBody">
                        <div className="navigation mb-3">
                            <ul>
                                <li className="list active">
                                    <button onClick={() => setSquad(store.plSquad)}>
                                        <span className="text">Premier League</span>
                                        <img className="league-img" src={`http://localhost:5000/api/v1/static/images/leagues/13.png`}/>
                                    </button>
                                </li>
                                <li className="list">
                                    <button onClick={() => setSquad(store.l1Squad)}>
                                        <span className="text">Ligue 1</span>
                                        <img className="league-img" src={`http://localhost:5000/api/v1/static/images/leagues/16.png`}/>
                                    </button>
                                </li>
                                <li className="list">
                                    <button onClick={() => setSquad(store.blSquad)}>
                                        <span className="text">Bundesliga</span>
                                        <img className="league-img" src={`http://localhost:5000/api/v1/static/images/leagues/19.png`}/>
                                    </button>
                                </li>
                                <li className="list">
                                    <button onClick={() => setSquad(store.saSquad)}>
                                        <span className="text">Serie A</span>
                                        <img className="league-img" src={`http://localhost:5000/api/v1/static/images/leagues/31.png`}/>
                                    </button>
                                </li>
                                <li className="list">
                                    <button onClick={() => setSquad(store.llSquad)}>
                                        <span className="text">LaLiga</span>
                                        <img className="league-img" src={`http://localhost:5000/api/v1/static/images/leagues/53.png`}/>
                                    </button>
                                </li>
                                <div className="indicator"></div>
                            </ul>
                        </div> 
                    </div>

{/* AQUI TERMINA EL COMPONENTE LEAGUES NAVIGATION EN VERSION CON BACKEND */}


{/* AQUI EMPIEZA EL COMPONENTE LEAGUES NAVIGATION EN VERSION OFFLINE, SIN BACKEND */}

                    {/* <div className="navigationBody">
                        <div className="navigation mb-3">
                            <ul>
                                <li className="list active">
                                    <button onClick={() => setSquad(actions.getHardCodedSquad())}>
                                        <span className="text">Premier League</span>
                                        <img className="league-img" src={`http://localhost:3000/13.png`}/>
                                    </button>
                                </li>
                                <li className="list">
                                    <button onClick={() => setSquad(actions.getHardCodedSquad())}>
                                        <span className="text">Ligue 1</span>
                                        <img className="league-img" src={`http://localhost:3000/16.png`}/>
                                    </button>
                                </li>
                                <li className="list">
                                    <button onClick={() => setSquad(actions.getHardCodedSquad())}>
                                        <span className="text">Bundesliga</span>
                                        <img className="league-img" src={`http://localhost:3000/19.png`}/>
                                    </button>
                                </li>
                                <li className="list">
                                    <button onClick={() => setSquad(actions.getHardCodedSquad())}>
                                        <span className="text">Serie A</span>
                                        <img className="league-img" src={`http://localhost:3000/31.png`}/>
                                    </button>
                                </li>
                                <li className="list">
                                    <button onClick={() => setSquad(actions.getHardCodedSquad())}>
                                        <span className="text">LaLiga</span>
                                        <img className="league-img" src={`http://localhost:3000/53.png`}/>
                                    </button>
                                </li>
                                <div className="indicator"></div>
                            </ul>
                        </div> 
            </div> */}

{/* AQUI TERMINA EL COMPONENTE LEAGUES NAVIGATION EN VERSION OFFLINE, SIN BACKEND */}


                    <div className="container field mt-0">
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div onClick={ () => actions.setPlayerDetailsPlayer(squad.lst, history)} className="col playercard LST"><PlayerCard player={squad.lst}/><span>LST</span></div> 
                                <div className="col CST"></div>
                                <div onClick={ () => actions.setPlayerDetailsPlayer(squad.rst, history)} className="col playercard RST"><PlayerCard player={squad.rst}/><span>RST</span></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                            <div className="row">
                                <div onClick={ () => actions.setPlayerDetailsPlayer(squad.lm, history)} className="col playercard LM"><PlayerCard player={squad.lm}/><span>LM</span></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div onClick={ () => actions.setPlayerDetailsPlayer(squad.rm, history)} className="col playercard RM"><PlayerCard player={squad.rm}/><span>RM</span></div>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div onClick={ () => actions.setPlayerDetailsPlayer(squad.lcm, history)} className="col playercard LCM"><PlayerCard player={squad.lcm}/><span>LCM</span></div>
                                <div className="col"></div>
                                <div onClick={ () => actions.setPlayerDetailsPlayer(squad.rcm, history)} className="col playercard RCM"><PlayerCard player={squad.rcm}/><span>RCM</span></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                            <div className="row">
                                <div onClick={ () => actions.setPlayerDetailsPlayer(squad.lb, history)} className="col playercard LB"><PlayerCard player={squad.lb}/><span>LB</span></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div onClick={ () => actions.setPlayerDetailsPlayer(squad.rb, history)} className="col playercard RB"><PlayerCard player={squad.rb}/><span>RB</span></div>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div onClick={ () => actions.setPlayerDetailsPlayer(squad.lcb, history)} className="col playercard LCB"><PlayerCard player={squad.lcb}/><span>LCB</span></div>
                                <div className="col"></div>
                                <div onClick={ () => actions.setPlayerDetailsPlayer(squad.rcb, history)} className="col playercard RCB"><PlayerCard player={squad.rcb}/><span>RCB</span></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div onClick={ () => actions.setPlayerDetailsPlayer(squad.gk, history)} className="col playercard GK"><PlayerCard player={squad.gk}/><span>GK</span></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                        
                    </div>
                </div>
        
    )
}

export default Squads