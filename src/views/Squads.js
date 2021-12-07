import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/AppContext'
import PlayerCard from '../components/PlayerCard';
import './Squads.css';

const Squads =() => {
    const { store, actions } = useContext(Context)
    /* const [ squad, setSquad] = useState([])
    useEffect( () =>{
        setSquad(actions.getSquad())
    }, []) */
    console.log('squad', actions.getSquad())

    return (
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8 d-flex align-items-center justify-content-center px-0 mx-0">
                <div className="field">
                    <div className="container mt-0">
                        <div className="row">
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col playercard LST"><PlayerCard player={actions.getSquad().lst}/></div> 
                            <div className="col CST"></div>
                            <div className="col playercard RST"><PlayerCard player={actions.getSquad().rst}/></div>
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
                            <div className="col playercard LM"><PlayerCard player={actions.getSquad().lm}/></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col playercard RM"><PlayerCard player={actions.getSquad().rm}/></div>
                        </div>
                        <div className="row">
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col playercard LCM"><PlayerCard player={actions.getSquad().lcm}/></div>
                            <div className="col"></div>
                            <div className="col playercard RCM"><PlayerCard player={actions.getSquad().rcm}/></div>
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
                            <div className="col playercard LB"><PlayerCard player={actions.getSquad().lb}/></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col playercard RB"><PlayerCard player={actions.getSquad().rb}/></div>
                        </div>
                        <div className="row">
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col playercard LCB"><PlayerCard player={actions.getSquad().lcb}/></div>
                            <div className="col"></div>
                            <div className="col playercard RCB"><PlayerCard player={actions.getSquad().rcb}/></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                        </div>
                        <div className="row">
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col playercard GK"><PlayerCard player={actions.getSquad().gk}/></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                            <div className="col"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-2"></div>

        </div>
    )
}

export default Squads