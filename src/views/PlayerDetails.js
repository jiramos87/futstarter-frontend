import React, { useState, useContext } from "react";
import PlayerCard from "../components/PlayerCard" 
import { Context } from '../store/AppContext'

const PlayerDetails = () => {
    const { store, actions } = useContext(Context)
    const [ squad, setSquad ] = useState(actions.getHardCodedSquad())   // this is only for developing whithout backend
    const player = squad.lst
    console.log("playerdetails", player)
    console.log(player.finishing)

    return(
        <div className="row d-flex flex-row mt-5 pt-5">
            <div className="col-2 ms-2"> 
                <PlayerCard player={player}/>
                <div className="bg-light text-end">
                <div className="row text-black ">
                <div className="col-3">Name:</div>
                <div className="col-9">{player.name}</div>
                </div>
                <div className="row text-black">
                <div className="col-3">Club:</div>
                <div className="col-9">{player.club}</div>
                </div>
                <div className="row text-black">
                <div className="col-3">Nation:</div>
                <div className="col-9">{player.nation}</div>
                </div>
                <div className="row text-black">
                <div className="col-3">League:</div>
                <div className="col-9">{player.leage}</div>
                </div>
                <div className="row text-black">
                <div className="col-3">Skill:</div>
                <div className="col-9">{player.skills}</div>
                </div>
                <div className="row text-black">
                <div className="col-3">Weak fook:</div>
                <div className="col-9">{player.weak_foot}</div>
                </div>
                <div className="row text-black">
                <div className="col-3">Foot:</div>
                <div className="col-9">{player.foot}</div>
                </div>
                <div className="row text-black">
                <div className="col-3">Height:</div>
                <div className="col-9">{player.height}</div>
                </div>
                <div className="row text-black">
                <div className="col-3">Weight</div>
                <div className="col-9">{player.weight}</div>
                </div>
                <div className="row text-black">
                <div className="col-3">Age:</div>
                <div className="col-9">{player.age}</div>
                </div>
                <div className="row text-black">
                <div className="col-3">Global:</div>
                <div className="col-9">{player.global_id}</div>
                </div>
                </div>
            </div>
            <div className="col-9 card-group">
                <div className="row row-cols-1 row-cols-md-3 g-4">
                    <div className="card p-1">
                        <h5>PACE</h5>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: player.pace + "%"}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="row">
                            <div className="col-10">Acceleration</div>
                            <div className="col-2 text-success" >{player.acceleration}</div>
                            <div className="col-10">Sprint Speed</div>
                            <div className="col-2 text-success" >{player.sprint_speed}</div>
                        </div>
                    </div>
                    <div className="card p-1">
                        <h5>SHOOTING</h5>
                        <div className="progress mb-3">
                        <div className="progress-bar " role="progressbar" style={{width: player.shooting + "%"}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>    
                        <div className="row">
                            <div className="col-10">Positioning</div>
                            <div className="col-2 text-success" >{player.positioning}</div>
                            <div className="col-10">Finishing</div>
                            <div className="col-2 text-success" >{player.finishing}</div>
                            <div className="col-10">Shot Power</div>
                            <div className="col-2 text-success" >{player.shot_power}</div>
                            <div className="col-10">Long Shots</div>
                            <div className="col-2 text-success" >{player.long_shots}</div>
                            <div className="col-10">Volleys</div>
                            <div className="col-2 text-success" >{player.volleys}</div>
                            <div className="col-10">Penalties</div>
                            <div className="col-2 text-success" >{player.penalties}</div>
                        </div>
                    </div>
                    <div className="card p-1">
                        <h5>PASSING</h5>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: player.passing + "%"}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="row">
                            <div className="col-10">Vision</div>
                            <div className="col-2 text-success" >{player.vision}</div>
                            <div className="col-10">Crossing</div>
                            <div className="col-2 text-success" >{player.crossing}</div>
                            <div className="col-10">FK. Accuracy</div>
                            <div className="col-2 text-success" >{player.fk_accuracy}</div>
                            <div className="col-10">Short Passing</div>
                            <div className="col-2 text-success" >{player.short_passing}</div>
                            <div className="col-10">Long Passing</div>
                            <div className="col-2 text-success" >{player.long_passing}</div>
                            <div className="col-10">Curve</div>
                            <div className="col-2 text-success" >{player.curve}</div>
                        </div>             
                    </div>
                    <div className="card p-1">
                        <h5>DRIBBLING</h5>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: player.dribbling_face + "%"}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="row">
                            <div className="col-10">Agility</div>
                            <div className="col-2 text-success" >{player.agility}</div>
                            <div className="col-10">Balance</div>
                            <div className="col-2 text-success" >{player.balance}</div>
                            <div className="col-10">Reactions</div>
                            <div className="col-2 text-success" >{player.reactions}</div>
                            <div className="col-10">Ball Control</div>
                            <div className="col-2 text-success" >{player.ball_control}</div>
                            <div className="col-10">Dribbling</div>
                            <div className="col-2 text-success" >{player.dribbling_face}</div>
                            <div className="col-10">Composure</div>
                            <div className="col-2 text-success" >{player.composure}</div>
                        </div>             
                    </div>
                    <div className="card p-1">
                        <h5>DEFENDING</h5>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: player.dribbling_face + "%"}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="row">
                            <div className="col-10">Interceptions</div>
                            <div className="col-2 text-success" >{player.interceptions}</div>
                            <div className="col-10">Heading Accuracy</div>
                            <div className="col-2 text-success" >{player.heading_accuracy}</div>
                            <div className="col-10">Def Awarene</div>
                            <div className="col-2 text-success" >{player.def_awarene}</div>
                            <div className="col-10">Standing Tackle</div>
                            <div className="col-2 text-success" >{player.standing_tackle}</div>
                            <div className="col-10">Sliding Tackle</div>
                            <div className="col-2 text-success" >{player.sliding_tackle}</div>
                        </div>             
                    </div>
                    <div className="card p-1">
                        <h5>PHYSICALITY</h5>
                        <div className="progress mb-3">
                        <div className="progress-bar bg-primary" role="progressbar" style={{width: player.dribbling_face + "%"}} aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                        <div className="row">
                            <div className="col-10">Jumping</div>
                            <div className="col-2 text-success" >{player.jumping}</div>
                            <div className="col-10">Stamina</div>
                            <div className="col-2 text-success" >{player.stamina}</div>
                            <div className="col-10">Strength</div>
                            <div className="col-2 text-success" >{player.strength}</div>
                            <div className="col-10">Aggression</div>
                            <div className="col-2 text-success" >{player.aggression}</div>
                        </div>             
                    </div>

                </div>
            </div>

        </div>
    );
    
}

export default PlayerDetails