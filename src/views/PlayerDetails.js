import React, { useState, useContext } from "react";
import PlayerCard from "../components/PlayerCard" 
import { Context } from '../store/AppContext'


const PlayerDetails = () => {
    
    const { store, actions } = useContext(Context)
    console.log(store.PlayerDetailsPlayer)
    const [ player, setPlayer ] = useState(store.PlayerDetailsPlayer)
    // const [ squad, setSquad ] = useState(actions.getHardCodedSquad())   // this is only for developing whithout backend
    
    console.log("playerdetails", player)

    return(
        
        <div className="row d-flex flex-row mt-5 pt-5">
            <div className="col-3    ms-2"> 
                <PlayerCard player={player}/>
                <div className="stats-defined text-end rounded px-2">
                <div className="row text-defined ">
                <div className="col-3">Name:</div>
                <div className="col-9">{player.name}</div>  
                </div>
                <div className="row text-defined">
                <div className="col-3">Club:</div>
                <div className="col-9">{player.club}</div>
                </div>
                <div className="row text-defined">
                <div className="col-3">Nation:</div>
                <div className="col-9">{player.nation}</div>
                </div>
                <div className="row text-defined">
                <div className="col-3">League:</div>
                <div className="col-9">{player.league}</div>
                </div>
                <div className="row text-defined">
                <div className="col-3">Skill:</div>
                <div className="col-9">{player.skill}</div>
                </div>
                <div className="row text-defined">
                <div className="col-3">Weak fook:</div>
                <div className="col-9">{player.weak_foot}</div>
                </div>
                <div className="row text-defined">
                <div className="col-3">Foot:</div>
                <div className="col-9">{player.foot}</div>
                </div>
                <div className="row text-defined">
                <div className="col-3">Height:</div>
                <div className="col-9">{player.height}</div>
                </div>
                <div className="row text-defined">
                <div className="col-3">Weight</div>
                <div className="col-9">{player.weight}</div>
                </div>
                <div className="row text-defined">
                <div className="col-3">Age:</div>
                <div className="col-9">{player.age}</div>
                </div>
                <div className="row text-defined">
                <div className="col-3">Global:</div>
                <div className="col-9">{player.global_id}</div>
                </div>
                </div>
            </div>
            <div className="col-8 card-group">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="card p-1">
                        <h6>PACE</h6>
                        <div className="progress mb-3">
                        <div className="progress-bar" role="progressbar" style={{width: player.pace + "%"}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="row">
                            <div className="col-8 text-start">Acceleration</div>
                            <div className="col-4 text-details text-end" >{player.acceleration}</div>
                            <div className="col-8 text-start">Sprint Speed</div>
                            <div className="col-4 text-details text-end" >{player.sprint_speed}</div>
                        </div>
                    </div>
                    <div className="card  p-1">
                        <h6>SHOOTING</h6>   
                        <div className="progress mb-3">
                        <div className="progress-bar" role="progressbar" style={{width: player.shooting + "%"}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>    
                        <div className="row">
                            <div className="col-6 text-stat">Positioning</div>
                            <div className="col-6 text-details text-end" >{player.positioning}</div>
                            <div className="col-6 text-stat">Finishing</div>
                            <div className="col-6 text-details text-end" >{player.finishing}</div>
                            <div className="    col-6 text-stat">Shot Power</div>
                            <div className="col-6 text-details text-end" >{player.shot_power}</div>
                            <div className="col-6 text-stat">Long Shots</div>
                            <div className="col-6 text-details text-end" >{player.long_shots}</div>
                            <div className="col-6 text-stat">Volleys</div>
                            <div className="col-6 text-details text-end" >{player.volleys}</div>
                            <div className="col-6 text-stat">Penalties</div>
                            <div className="col-6 text-details text-end" >{player.penalties}</div>
                        </div>
                    </div>
                    <div className="card p-1">
                        <h6>PASSING</h6>
                        <div className="progress mb-3">
                        <div className="progress-bar" role="progressbar" style={{width: player.passing + "%"}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="row">
                            <div className="col-8 text-start">Vision</div>
                            <div className="col-4 text-details text-end" >{player.vision}</div>
                            <div className="col-8 text-start">Crossing</div>
                            <div className="col-4 text-details text-end" >{player.crossing}</div>
                            <div className="col-8 text-start">FK. Accuracy</div>
                            <div className="col-4 text-details text-end" >{player.fk_accuracy}</div>
                            <div className="col-8 text-start">Short Passing</div>
                            <div className="col-4 text-details text-end" >{player.short_passing}</div>
                            <div className="col-8 text-start">Long Passing</div>
                            <div className="col-4 text-details text-end" >{player.long_passing}</div>
                            <div className="col-8 text-start">Curve</div>
                            <div className="col-4 text-details text-end" >{player.curve}</div>
                        </div>             
                    </div>
                    <div className="card p-1">
                        <h6>DRIBBLING</h6>
                        <div className="progress mb-3">
                        <div className="progress-bar" role="progressbar" style={{width: player.dribbling_face + "%"}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="row">
                            <div className="col-8 text-start">Agility</div>
                            <div className="col-4 text-details text-end" >{player.agility}</div>
                            <div className="col-8 text-start">Balance</div>
                            <div className="col-4 text-details text-end" >{player.balance}</div>
                            <div className="col-8 text-start">Reactions</div>
                            <div className="col-4 text-details text-end" >{player.reactions}</div>
                            <div className="col-8 text-start">Ball Control</div>
                            <div className="col-4 text-details text-end" >{player.ball_control}</div>
                            <div className="col-8 text-start">Dribbling</div>
                            <div className="col-4 text-details text-end" >{player.dribbling_face}</div>
                            <div className="col-8 text-start">Composure</div>
                            <div className="col-4 text-details text-end" >{player.composure}</div>
                        </div>             
                    </div>
                    <div className="card p-1">
                        <h6>DEFENDING</h6>
                        <div className="progress mb-3">
                        <div className="progress-bar" role="progressbar" style={{width: player.dribbling_face + "%"}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="row">
                            <div className="col-8 text-start">Interceptions</div>
                            <div className="col-4 text-details text-end" >{player.interceptions}</div>
                            <div className="col-8 text-start">Heading Accuracy</div>
                            <div className="col-4 text-details text-end" >{player.heading_accuracy}</div>
                            <div className="col-8 text-start">Def Awarene</div>
                            <div className="col-4 text-details text-end" >{player.def_awarene}</div>
                            <div className="col-8 text-start">Standing Tackle</div>
                            <div className="col-4 text-details text-end" >{player.standing_tackle}</div>
                            <div className="col-8 text-start">Sliding Tackle</div>
                            <div className="col-4 text-details text-end" >{player.sliding_tackle}</div>
                        </div>             
                    </div>
                    <div className="card p-1">
                        <h6>PHYSICALITY</h6>
                        <div className="progress mb-3">
                        <div className="progress-bar" role="progressbar" style={{width: player.dribbling_face + "%"}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="row">
                            <div className="col-8 text-start">Jumping</div>
                            <div className="col-4 text-details text-end" >{player.jumping}</div>
                            <div className="col-8 text-start">Stamina</div>
                            <div className="col-4 text-details text-end" >{player.stamina}</div>
                            <div className="col-8 text-start">Strength</div>
                            <div className="col-4 text-details text-end" >{player.strength}</div>
                            <div className="col-8 text-start">Aggression</div>
                            <div className="col-4 text-details text-end" >{player.aggression}</div>
                        </div>             
                    </div>
                </div>
            </div>
        </div>
    );
    
}

export default PlayerDetails