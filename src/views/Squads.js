import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/AppContext'
import PlayerCard from '../components/PlayerCard';
import { Link } from 'react-router-dom';
import './Squads.css';
import './LeaguesNavigation.css';

const Squads = () => {
    
    const { store, actions } = useContext(Context)
    const [ squad, setSquad ] = useState(store.plSquad)   //this is the real deal
    //const [ squad, setSquad ] = useState(actions.getHardCodedSquad())   // this is only for developing whithout backend
    
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
                                <div className="col playercard LST"><button onClick={ () => actions.setPlayerDetailsPlayer(squad.lst)}><Link to="/playerdetails"><PlayerCard player={squad.lst}/></Link></button><span>LST</span></div> 
                                <div className="col CST"></div>
                                <div className="col playercard RST"><button onClick={ () => actions.setPlayerDetailsPlayer(squad.rst)}><Link to="/playerdetails"><PlayerCard player={squad.rst}/></Link></button><span>RST</span></div>
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
                                <div className="col playercard LM"><button onClick={ () => actions.setPlayerDetailsPlayer(squad.lm)}><Link to="/playerdetails"><PlayerCard player={squad.lm}/></Link></button></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col playercard RM"><button onClick={ () => actions.setPlayerDetailsPlayer(squad.rm)}><Link to="/playerdetails"><PlayerCard player={squad.rm}/></Link></button></div>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col playercard LCM"><button onClick={ () => actions.setPlayerDetailsPlayer(squad.lcm)}><Link to="/playerdetails"><PlayerCard player={squad.lcm}/></Link></button></div>
                                <div className="col"></div>
                                <div className="col playercard RCM"><button onClick={ () => actions.setPlayerDetailsPlayer(squad.rcm)}><Link to="/playerdetails"><PlayerCard player={squad.rcm}/></Link></button></div>
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
                                <div className="col playercard LB"><button onClick={ () => actions.setPlayerDetailsPlayer(squad.lb)}><Link to="/playerdetails"><PlayerCard player={squad.lb}/></Link></button></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col playercard RB"><button onClick={ () => actions.setPlayerDetailsPlayer(squad.rb)}><Link to="/playerdetails"><PlayerCard player={squad.rb}/></Link></button></div>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col playercard LCB"><button onClick={ () => actions.setPlayerDetailsPlayer(squad.lcb)}><Link to="/playerdetails"><PlayerCard player={squad.lcb}/></Link></button></div>
                                <div className="col"></div>
                                <div className="col playercard RCB"><button onClick={ () => actions.setPlayerDetailsPlayer(squad.rcb)}><Link to="/playerdetails"><PlayerCard player={squad.rcb}/></Link></button></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col playercard GK"><button onClick={ () => actions.setPlayerDetailsPlayer(squad.gk)}><Link to="/playerdetails"><PlayerCard player={squad.gk}/></Link></button></div>
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