import React from "react";
// import './index.css';

function PlayerCard() {
    console.log("hola player card");
    return (
        <div className="card-1">
            <div className="card-body">
            <div className="informacion">
                <h3 className="NUMERO-JUGADOR">94</h3>
                <div className="PAIS-JUGADOR" alt="" />
                </div>
                <div className="copa">
                <div className="COPA-JUGADOR" alt="" />
                </div>
                <div className="cara">  
                <div className="CARA-JUGADOR" alt="" />
                </div>
                <h3 className="NOMBRE-JUGADOR">Messi</h3>
            </div>
        </div>
    );
}
export default PlayerCard;