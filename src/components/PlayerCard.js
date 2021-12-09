import React from "react";
// import './index.css';

function PlayerCard() {
    console.log("hola player card");
    return (
        <div className="card-1body">
            <div className="card-body">
            <div className="informacion">
                <h3 className="NUMBER-PLAYERS">94</h3>
                <div className="PAIS-PLAYERS" alt="" />
                </div>
                <div className="copa">
                <div className="CUP-PLAYERS" alt="" />
                </div>
                <div className="cara">  
                <div className="FACE-PLAYERS" alt="" />
                </div>
                <h3 className="NAME-PLAYERS">Messi</h3>
            </div>
        </div>
    );
}
export default PlayerCard;