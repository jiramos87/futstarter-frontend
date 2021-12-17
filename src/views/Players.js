import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/AppContext'
import { Link, useHistory } from 'react-router-dom';
import './Squads.css';
import './Players.css'
import './LeaguesNavigation.css';
import './NavigationPosition.css';
import { useNavigate } from "react-router-dom"

const Players = () => {
    
    const { store, actions } = useContext(Context)
    const [league, setLeague] = useState('Premier League')
    //console.log("list in players", actions.getHardCodedPlayerList().data)
    const [ position, setPosition ] = useState('Attackers')
    const [ playerList, setPlayerList ] = useState(store.plListAttackers.data)   //this is the real deal
    //const [ playerList, setPlayerList ] = useState(actions.getHardCodedPlayerList().data)   // this is only for developing whithout backend
    console.log('playerlist[0] :', playerList[0])
    const history = useHistory()
    // const handleDetailsClick = (player) => {
    //     actions.setPlayerDetailsPlayer(player)
    //     useNavigate()
    // }
 
    const players = playerList.map( (player, key) => {
        return(
            <tbody>
                
                    <tr onClick={ () => actions.setPlayerDetailsPlayer(player, history)} className="text-center cursor-pointer" scope="row">
                        <td>{key + 1} </td>
                        <td className="d-flex flex-row"><img className="list-face" src={`http://localhost:5000/api/v1/static/images/faces/${player.global_id}.png`}/>{player.name}</td>
                        <td>{player.rating}</td>
                        
                        {
                            position === 'Attackers' ? 
                            <>
                                <td>{player.cst_meta_rating}</td>
                                <td>{player.finishing}</td>
                                <td>{player.sprint_speed}</td>
                                <td>{player.agility}</td>
                            </>
                        :
                            position === 'Midfielders' ? 
                            <>
                                <td>{player.ccm_meta_rating}</td>
                                <td>{player.short_passing}</td>
                                <td>{player.acceleration}</td>
                                <td>{player.stamina}</td>
                            </>
                        :
                            position === 'Defenders' ? 
                            <>
                                <td>{player.ccb_meta_rating}</td>
                                <td>{player.sprint_speed}</td>
                                <td>{player.interceptions}</td>
                                <td>{player.standing_tackle}</td>
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
            //setPlayerList(actions.getHardCodedPlayerList.data)
        }
        if(userleague === 'Premier League' && userposition === 'Midfielders') {
            setPlayerList(store.plListMidfielders.data)
            //setPlayerList(actions.getHardCodedPlayerList.data)
        }
        if(userleague === 'Premier League' && userposition === 'Defenders') {
            setPlayerList(store.plListDefenders.data)
            //setPlayerList(actions.getHardCodedPlayerList.data)
        }
        if(userleague === 'Ligue 1' && userposition === 'Attackers') {
            setPlayerList(store.l1ListAttackers.data)
            //setPlayerList(actions.getHardCodedPlayerList.data)
        }
        if(userleague === 'Ligue 1' && userposition === 'Midfielders') {
            setPlayerList(store.l1ListMidfielders.data)
            //setPlayerList(actions.getHardCodedPlayerList.data)
        }
        if(userleague === 'Ligue 1' && userposition === 'Defenders') {
            setPlayerList(store.l1ListDefenders.data)
            //setPlayerList(actions.getHardCodedPlayerList.data)
        }
        if(userleague === 'Bundesliga' && userposition === 'Attackers') {
            setPlayerList(store.blListAttackers.data)
            //setPlayerList(actions.getHardCodedPlayerList.data)
        }
        if(userleague === 'Bundesliga' && userposition === 'Midfielders') {
            setPlayerList(store.blListMidfielders.data)
            //setPlayerList(actions.getHardCodedPlayerList.data)
        }
        if(userleague === 'Bundesliga' && userposition === 'Defenders') {
            setPlayerList(store.blListDefenders.data)
            //setPlayerList(actions.getHardCodedPlayerList.data)
        }
        if(userleague === 'Serie A' && userposition === 'Attackers') {
            setPlayerList(store.saListAttackers.data)
            //setPlayerList(actions.getHardCodedPlayerList.data)
        }
        if(userleague === 'Serie A' && userposition === 'Midfielders') {
            setPlayerList(store.saListMidfielders.data)
            //setPlayerList(actions.getHardCodedPlayerList.data)
        }
        if(userleague === 'Serie A' && userposition === 'Defenders') {
            setPlayerList(store.saListDefenders.data)
            //setPlayerList(actions.getHardCodedPlayerList.data)
        }
        if(userleague === 'LaLiga' && userposition === 'Attackers') {
            setPlayerList(store.llListAttackers.data)
            //setPlayerList(actions.getHardCodedPlayerList.data)
        }
        if(userleague === 'LaLiga' && userposition === 'Midfielders') {
            setPlayerList(store.llListMidfielders.data)
            //setPlayerList(actions.getHardCodedPlayerList.data)
        }
        if(userleague === 'LaLiga' && userposition === 'Defenders') {
            setPlayerList(store.llListDefenders.data)
            //setPlayerList(actions.getHardCodedPlayerList.data)
        }
    }
    
    return (
        <div className="row mt-5"> 

{/* AQUI EMPIEZA EL COMPONENTE LEAGUES NAVIGATION EN VERSION CON BACKEND */}

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
            </div>

{/* AQUI TERMINA EL COMPONENTE LEAGUES NAVIGATION EN VERSION CON BACKEND */}


{/* AQUI EMPIEZA EL COMPONENTE LEAGUES NAVIGATION EN VERSION OFFLINE, SIN BACKEND */}
{/* 
            <div className="navigationBody">
                <div className="navigation mb-3">
                    <ul>
                        <li className="list active">
                            <button onClick={() => handleLeague(actions.getHardCodedSquad())}>
                                <span className="text">Premier League</span>
                                <img className="league-img" src={`http://localhost:3000/13.png`}/>
                            </button>
                        </li>
                        <li className="list">
                            <button onClick={() => handleLeague(actions.getHardCodedSquad())}>
                                <span className="text">Ligue 1</span>
                                <img className="league-img" src={`http://localhost:3000/16.png`}/>
                            </button>
                        </li>
                        <li className="list">
                            <button onClick={() => handleLeague(actions.getHardCodedSquad())}>
                                <span className="text">Bundesliga</span>
                                <img className="league-img" src={`http://localhost:3000/19.png`}/>
                            </button>
                        </li>
                        <li className="list">
                            <button onClick={() => handleLeague(actions.getHardCodedSquad())}>
                                <span className="text">Serie A</span>
                                <img className="league-img" src={`http://localhost:3000/31.png`}/>
                            </button>
                        </li>
                        <li className="list">
                            <button onClick={() => handleLeague(actions.getHardCodedSquad())}>
                                <span className="text">LaLiga</span>
                                <img className="league-img" src={`http://localhost:3000/53.png`}/>
                            </button>
                        </li>
                        <div className="indicator"></div>
                    </ul>
                </div> 
            </div> */}

{/* AQUI TERMINA EL COMPONENTE LEAGUES NAVIGATION EN VERSION OFFLINE, SIN BACKEND */}

            <div className="d-flex flex-row navigationPositionBody">
                <button className="btn navigationPosition Attackers" onClick={() => handlePosition('Attackers')}>Attackers</button>
                <button className="btn navigationPosition Midfielders" onClick={() => handlePosition('Midfielders')}>Midfielders</button>
                <button className="btn navigationPosition Defenders" onClick={() => handlePosition('Defenders')}>Defenders</button>
            </div>

            <div className='mt-3'> 
                    <h1 className="text-white">{league} {position}</h1>
                    <table className="table table-hover table-dark table-striped table-bordered">
                        <thead>
                            <tr>
                                <th width="3%" scope="col"><small>Ranking</small></th>
                                <th width="20%" scope="col">Name</th>
                                <th width="5%" scope="col">Rating</th>
                                
                            
                            {
                            position === 'Attackers' ? 
                                <>  
                                    <th width="13%" scope="col">ST Meta Rating</th>
                                    <th width="7%" scope="col">Finishing</th>
                                    <th width="11%" scope="col">Sprint speed</th>
                                    <th width="11%" scope="col">Agility</th>
                                </>
                            :
                            position === 'Midfielders' ? 
                                <>
                                    <th width="13%" scope="col">CM Meta Rating</th>
                                    <th width="11%" scope="col">Short Passing</th>
                                    <th width="11%" scope="col">Acceleration</th>
                                    <th width="11%" scope="col">Stamina</th>
                                </>
                            :
                            position === 'Defenders' ? 
                                <>
                                    <th width="13%" scope="col">CB Meta Rating</th>
                                    <th width="11%" scope="col">Sprint speed</th>
                                    <th width="11%" scope="col">Interceptions</th>
                                    <th width="11%" scope="col">Standing tackle</th>
                                    
                                </>
                            :
                            ""
                            }
                            </tr>
                        </thead>
                        {players}
                    </table>
            </div>
            <div className="col-2">
                
            </div>
        </div>
    )
}

export default Players