import React, { useContext } from 'react'
// import { Context } from '../store/AppContext'


function Players() {
    return (
        <div className='players'>
            <h1>Meta Players</h1>
        </div>
    )
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
            <ul className="text-white">
                { {players} }
            </ul>
        </div>
    )
}

export default Players; */