import React, { useContext } from 'react'
// import { Context } from '../store/AppContext'


function Players() {
    return (
        <><h2>Meta Players</h2>
        <div className="container-meta-player">
            <div className="row">
                <div className="col-md-12">
                    <div className="Meta-Player">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="Face-Player"/>         
                            </div>
                            <div className="col-md-2">
                                <ul className="Segunda-lista">
                                <div className="Player-country"></div>
                                <div className="Name-country"><h5>Argentina</h5></div>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="Tercera-lista">
                                    <div className="Leage-Img"></div>
                                    <div className="Leage-Name"><h5>Barcelona S.C.</h5></div>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="Cuarta-lista">
                                    <div className=""></div>
                                    <div className="Card-Cost"><h5>500,000</h5></div>
                                </ul>
                            </div>

                            <div className="col-md-1">
                            <div className="Valoracion"></div>
                            </div>
                        </div>
                    </div>
                    {/* <!--Body content--> */}
                </div>
            </div>
        <div className="container-meta-player2">
            <div className="row-2">
                <div className="col-md-12">
                    <div className="Meta-Player">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="Face-Player"/>         
                            </div>
                            <div className="col-md-2">
                                <ul className="Segunda-lista">
                                <div className="Player-country"></div>
                                <div className="Name-country"><h5>Argentina</h5></div>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="Tercera-lista">
                                    <div className="Leage-Img"></div>
                                    <div className="Leage-Name"><h5>Barcelona S.C.</h5></div>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="Cuarta-lista">
                                    <div className=""></div>
                                    <div className="Card-Cost"><h5>500,000</h5></div>
                                </ul>
                            </div>

                            <div className="col-md-1">
                            <div className="Valoracion"></div>
                            </div>
                        </div>
                    </div>
                    {/* <!--Body content--> */}
                </div>
            </div>
        </div>
        <div className="container-meta-player3">
            <div className="row">
                <div className="col-md-12">
                    <div className="Meta-Player">
                        <div className="row">
                            <div className="col-md-2">
                                <div className="Face-Player"/>         
                            </div>
                            <div className="col-md-2">
                                <ul className="Segunda-lista">
                                <div className="Player-country"></div>
                                <div className="Name-country"><h5>Argentina</h5></div>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="Tercera-lista">
                                    <div className="Leage-Img"></div>
                                    <div className="Leage-Name"><h5>Barcelona S.C.</h5></div>
                                </ul>
                            </div>
                            <div className="col-md-3">
                                <ul className="Cuarta-lista">
                                    <div className=""></div>
                                    <div className="Card-Cost"><h5>500,000</h5></div>
                                </ul>
                            </div>

                            <div className="col-md-1">
                            <div className="Valoracion"></div>
                            </div>
                        </div>
                    </div>
                    {/* <!--Body content--> */}
                </div>
            </div>
        </div>
        </div></>
        
    );
}
export default Players

/* const Players = () => {
    
    const { store, actions } = useContext(Context)
    console.log('players: ', console.log(store.pl_players)) */

    /* const players = store.pl_players.map( (player) => {
        
        return(
        <li key={player.id}>
            {player.name}
        </li>
        )
    }) */

/*     return (
        <div>
            <ul classNameName="text-white">
                { {players} }
            </ul>
        </div>
    )
}

export default Players; */