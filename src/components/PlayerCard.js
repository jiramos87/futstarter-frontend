import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../store/AppContext'
// import './index.css';

function PlayerCard(props) {
    
    const { store, actions } = useContext(Context)
    // const [ player, setPlayer] = useState([])
    // useEffect( () =>{
    //     setPlayer(props.player)
    // }, [])
    console.log(props.player.resource_id)
    
    return (
        <div className="card-1">
            <div className="card-top">
                <div className="informacion">
                    <h3 className="NUMBER-PLAYERS">{props.player.rating}</h3>
                    <div className="PAIS-PLAYERS" alt="" ></div>
                    <div className="CUP-PLAYERS" alt="">
                            
                    </div>  
                </div>
                <div className="FACE-PLAYERS" alt="" >{/* { } <img src={props.player.face_image}/> */}</div>
                
            </div>
            <div className="card-bottom">
                <h3 className="NAME-PLAYERS text-center">{props.player.common_name}</h3>
                <div className="basic-ratings">
                    <div className="row">
                        <div className="col">{props.player.pace} PAC </div>
                        <div className="col">{props.player.dribbling_face} DRI</div>
                    </div>
                    <div className="row">
                        <div className="col">{props.player.shooting} SHO</div>
                        <div className="col">{props.player.defending} DEF</div>
                    </div>
                    <div className="row">
                        <div className="col">{props.player.passing} PAS</div>
                        <div className="col">{props.player.physicality} PHY</div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default PlayerCard;