import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/AppContext'
import PlayerCard from '../components/PlayerCard';
import './Squads.css';

const Squads = () => {
    
    const { store, actions } = useContext(Context)
    const [ squad, setSquad ] = useState(store.l1Squad)   //this is the real deal
    // const [ squad, setSquad ] = useState(actions.getHardCodedSquad())   // this is only for developing whithout backend
    console.log('squad.lst :', squad.lst)
    
 
    return (
        <div className="row"> 
                <div className="col-2">
                    
                </div>
                <div className="col-8 d-flex align-items-center justify-content-center px-0 mx-0">
                    
                        <div className="container field mt-0">
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col playercard LST"><PlayerCard player={squad.lst}/><span>LST</span></div> 
                                <div className="col CST"></div>
                                <div className="col playercard RST"><PlayerCard player={squad.rst}/><span>RST</span></div>
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
                                <div className="col playercard LM"><PlayerCard player={squad.lm}/></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col playercard RM"><PlayerCard player={squad.rm}/></div>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col playercard LCM"><PlayerCard player={squad.lcm}/></div>
                                <div className="col"></div>
                                <div className="col playercard RCM"><PlayerCard player={squad.rcm}/></div>
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
                                <div className="col playercard LB"><PlayerCard player={squad.lb}/></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col playercard RB"><PlayerCard player={squad.rb}/></div>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col playercard LCB"><PlayerCard player={squad.lcb}/></div>
                                <div className="col"></div>
                                <div className="col playercard RCB"><PlayerCard player={squad.rcb}/></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col playercard GK"><PlayerCard player={squad.gk}/></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                        
                    </div>
                </div>
                <div className="col-2">
                    <div className="mt-5 pt-5 d-flex flex-column justify-content-start">
                        <button className="btn btn-primary border border-warning" onClick={() => setSquad(store.plSquad)}>Premier league</button>
                        <button className="btn btn-primary border border-warning" onClick={() => setSquad(store.l1Squad)}>Ligue 1</button>
                        <button className="btn btn-primary border border-warning" onClick={() => setSquad(store.blSquad)}>Bundesliga</button>
                        <button className="btn btn-primary border border-warning" onClick={() => setSquad(store.saSquad)}>Serie A</button>
                        <button className="btn btn-primary border border-warning" onClick={() => setSquad(store.llSquad)}>LaLiga</button>
                    </div> 
                </div>
                {/* <div className="col-2">
                    <div className="mt-5 pt-5 d-flex flex-column justify-content-start">
                        <button className="btn btn-primary border border-warning" onClick={() => setSquad(actions.getHardCodedSquad())}>Premier league</button>
                        <button className="btn btn-primary border border-warning" onClick={() => setSquad(actions.getHardCodedSquad())}>Ligue 1</button>
                        <button className="btn btn-primary border border-warning" onClick={() => setSquad(actions.getHardCodedSquad())}>Bundesliga</button>
                        <button className="btn btn-primary border border-warning" onClick={() => setSquad(actions.getHardCodedSquad())}>Serie A</button>
                        <button className="btn btn-primary border border-warning" onClick={() => setSquad(actions.getHardCodedSquad())}>LaLiga</button>
                    </div> 
                </div> */}

            </div>
    )
}

export default Squads