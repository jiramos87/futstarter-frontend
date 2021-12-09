import React, { useState, useContext, useEffect } from 'react'
import { Context } from '../store/AppContext'
// import './index.css';
const PlayerCard = (props) => {

    console.log('playercard props: ', props.player)
    
    
    return (
        <div className="card-1">
            <div className="card-top">
                <div className="informacion">
                    <h3 className="NUMBER-PLAYERS">{props.player.rating}</h3>
                    <img className="nation" src={`http://localhost:5000/api/v1/static/images/nations/${props.player.nation}.png`}/>
                    <img className="club" src={`http://localhost:5000/api/v1/static/images/clubs/${props.player.club}.png`}/>
                </div>
                <img className="face" src={`http://localhost:5000/api/v1/static/images/faces/${props.player.global_id}.png`}/>
                
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