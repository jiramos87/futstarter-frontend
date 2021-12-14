import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/AppContext'
import { Link } from 'react-router-dom';
import './Squads.css';

const Players = () => {
    
    const { store, actions } = useContext(Context)
    const [ league, setLeague ] = useState('Premier League')
    const [ position, setPosition ] = useState('Attackers')
    const [ playerList, setPlayerList ] = useState(store.plListAttackers.data)   //this is the real deal
    // const [ list, setList ] = useState(actions.getHardCodedPlayerList().data)   // this is only for developing whithout backend
    console.log('playerlist[0] :', playerList[0])
    
    const players = playerList.map( (player, key) => {
        return(
            <tbody>
                <tr className="text-center" scope="row">
                        <td>{key + 1} </td>
                        <td className="d-flex flex-row"><button onClick={ () => actions.setPlayerDetailsPlayer(player)}><Link to="/playerdetails"><img className="list-face" src={`http://localhost:5000/api/v1/static/images/faces/${player.global_id}.png`}/>{player.name}</Link></button></td>
                        <td>{player.rating}</td>
                        <td>{player.cst_meta_rating}</td>
                        {
                            position === 'Attackers' ? 
                            <>
                                <td>{player.finishing}</td>
                                <td>{player.sprint_speed}</td>
                                <td>{player.agility}</td>
                            </>
                        :
                            ""
                        }
                    
                </tr>
            </tbody>
        )
    })
    const list = document.querySelectorAll('.list');
    function activeLink() {
        list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) =>
    item.addEventListener('click', activeLink));

    const handlePosition = (userposition) => {
        setPosition(userposition)
        console.log('position click: ', league, userposition)
        handleLeague(league, userposition)
    }
    const handleLeague = (userleague, userposition) => {
        setLeague(userleague)
        console.log('league click', userleague, userposition)
        if(userleague === 'Premier League' && userposition === 'Attackers') {
            setPlayerList(store.plListAttackers.data)
        }
        if(userleague === 'Premier League' && userposition === 'Midfielders') {
            setPlayerList(store.plListMidfielders.data)
        }
        if(userleague === 'Premier League' && userposition === 'Defenders') {
            setPlayerList(store.plListDefenders.data)
        }
        if(userleague === 'Ligue 1' && userposition === 'Attackers') {
            setPlayerList(store.l1ListAttackers.data)
        }
        if(userleague === 'Ligue 1' && userposition === 'Midfielders') {
            setPlayerList(store.l1ListMidfielders.data)
        }
        if(userleague === 'Ligue 1' && userposition === 'Defenders') {
            setPlayerList(store.l1ListDefenders.data)
        }
        if(userleague === 'Bundesliga' && userposition === 'Attackers') {
            setPlayerList(store.blListAttackers.data)
        }
        if(userleague === 'Bundesliga' && userposition === 'Midfielders') {
            setPlayerList(store.blListMidfielders.data)
        }
        if(userleague === 'Bundesliga' && userposition === 'Defenders') {
            setPlayerList(store.blListDefenders.data)
        }
        if(userleague === 'Serie A' && userposition === 'Attackers') {
            setPlayerList(store.saListAttackers.data)
        }
        if(userleague === 'Serie A' && userposition === 'Midfielders') {
            setPlayerList(store.saListMidfielders.data)
        }
        if(userleague === 'Serie A' && userposition === 'Defenders') {
            setPlayerList(store.saListDefenders.data)
        }
        if(userleague === 'LaLiga' && userposition === 'Attackers') {
            console.log(store.llListAttackers.data)
            setPlayerList(store.llListAttackers.data)
        }
        if(userleague === 'LaLiga' && userposition === 'Midfielders') {
            setPlayerList(store.llListMidfielders.data)
        }
        if(userleague === 'LaLiga' && userposition === 'Defenders') {
            setPlayerList(store.llListDefenders.data)
        }
    }
    
    return (
        <div className="row" >
                    <div className="navigationBody">
                      <div className="navigation mb-3">
                        <ul>
                            <li className="list active">
                                <button onClick={() => handleLeague('Premier League', position)}>
                                    <span className="text">Premier</span>
                                    <img className="league-img" src={`http://localhost:5000/api/v1/static/images/leagues/13.png`}/>
                                </button>
                            </li>
                            <li className="list">
                                <button onClick={() => handleLeague('Ligue 1', position)}>
                                    <span className="text">Ligue 1</span>
                                    <img className="league-img" src={`http://localhost:5000/api/v1/static/images/leagues/16.png`}/>
                                </button>
                            </li>
                            <li className="list">
                                <button onClick={() => handleLeague('Bundesliga', position)}>
                                    <span className="text">Bundesliga</span>
                                    <img className="league-img" src={`http://localhost:5000/api/v1/static/images/leagues/19.png`}/>
                                </button>
                            </li>
                            <li className="list">
                                <button onClick={() => handleLeague('Serie A', position)}>
                                    <span className="text">Serie A</span>
                                    <img className="league-img" src={`http://localhost:5000/api/v1/static/images/leagues/31.png`}/>
                                </button>
                            </li>
                            <li className="list">
                                <button onClick={() => handleLeague('LaLiga', position)}>
                                    <span className="text">LaLiga</span>
                                    <img className="league-img" src={`http://localhost:5000/api/v1/static/images/leagues/53.png`}/>
                                </button>
                            </li>
                            <div className="indicator"></div>
                        </ul>
                        </div>
                        <div className="d-flex flex-row">
                            <button className="btn btn-primary border border-warning" onClick={() => handlePosition('Attackers')}>Attackers</button>
                            <button className="btn btn-primary border border-warning" onClick={() => handlePosition('Midfielders')}>Midfielders</button>
                            <button className="btn btn-primary border border-warning" onClick={() => handlePosition('Defenders')}>Defenders</button>
                        </div>
                            
                    </div> 
                    <h1 className="text-white">{league} {position}</h1>
                    <table className="table table-dark table-striped table-bordered">
                        <thead>
                            <tr>
                                <th scope="col"><small>Ranking</small></th>
                                <th scope="col">Name</th>
                                <th scope="col">Rating</th>
                                <th scope="col">Meta Rating</th>
                            
                            {
                            position === 'Attackers' ? 
                            <>
                                <th scope="col">Finishing</th>
                                <th scope="col">Sprint speed</th>
                                <th scope="col">Agility</th>
                            </>
                            :
                            ""
                            }
                            </tr>
                        </thead>
                        {players}
                    </table>

                <div className="col-2">
                    
                </div>
            </div>

        
    )
}

export default Players