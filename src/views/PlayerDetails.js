import React, { useState, useContext } from "react";
import PlayerCard from "../components/PlayerCard" 
import { Context } from '../store/AppContext'


const PlayerDetails = () => {
    
    const { store, actions } = useContext(Context)
    const [ player, setPlayer ] = useState(store.PlayerDetailsPlayer)
    // const [ squad, setSquad ] = useState(actions.getHardCodedSquad())   // this is only for developing whithout backend
    
    console.log("playerDetails", player)

    return(
        
        <div className="row d-flex flex-row mt-5 pt-5">
            <div className="col-3"> 
                <div className="d-flex flex-row justify-content-center mb-5">
                    <PlayerCard player={player}/>
                </div>
                <div className="stats-defined rounded">
                        <table class="table table-sm text-start details-table">
                            <thead>
                                <tr>
                                    <th colspan="4" className="text-center">INFO</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td><b>Name</b></td>
                                    <td>{player.name ? player.name : 'N/A'}</td>
                                    <td><b>Club</b></td>
                                    <td>{player.club_str ? player.club_str : 'N/A'} <img className="club-details" src={`http://localhost:5000/api/v1/static/images/clubs/${player.club}.png`}/></td>
                                </tr>
                                <tr>
                                    <td><b>Nation</b></td>
                                    <td>{player.nation_str}<img className="nation-details" src={`http://localhost:5000/api/v1/static/images/nations/${player.nation}.png`}/></td>
                                    <td><b>League</b></td>
                                    <td>{player.league_str}</td>
                                </tr>
                                <tr>
                                    <td><b>Skill Moves</b></td>
                                    <td>{player.skill_moves ? player.skill_moves : 'N/A'}</td>
                                    <td><b>Weak Foot</b></td>
                                    <td>{player.weak_foot ? player.weak_foot : 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td><b>Foot</b></td>
                                    <td>{player.foot ? player.foot : 'N/A'}</td>
                                    <td><b>Weak Foot</b></td>
                                    <td>{player.weak_foot ? player.weak_foot : 'N/A'}</td>
                                </tr>
                                <tr>
                                    <td><b>Height</b></td>
                                    <td>{player.height ? player.height : 'N/A'}</td>
                                    <td><b>Weight</b></td>
                                    <td>{player.weight ? player.weight : 'N/A'}</td>
                                </tr>
                            </tbody>
                        </table>
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