import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/AppContext'
import PlayerCard from '../components/PlayerCard';
import { Link, useHistory } from 'react-router-dom';
import './Squads.css';
import './SquadCreator.css'
import './LeaguesNavigation.css';
    

const Squads = () => {
    
    const { store, actions } = useContext(Context)
    let currentSquad = localStorage.getItem('current-squad') != null ? JSON.parse(localStorage.getItem('current-squad')) : store.plSquade

    const [ squad, setSquad ] = useState(store.plSquad)   //this squad is for developing with backend
    const [ mouseHover, setMouseHover ] = useState(false)
    const [ player, setPlayer ] = useState(store.PlayerDetailsPlayer) 
    const [ league, setLeague ] = useState('Premier League')
    const [ position, setPosition ] = useState('')
    // const [ squad, setSquad ] = useState(actions.getHardCodedSquad())   // this is only for developing whithout backend
    const history = useHistory()

    // console.log(squad[0].player_data.league_str)
    // console.log(squad[0].position)
    
    // league selector
    const list = document.querySelectorAll('.list');
    function activeLink() {
        list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) =>
    item.addEventListener('click', activeLink));

    

    let players = squad.map((player, index) => {
        //console.log(user_player.player_data)
        return (
            <div className={`playerlist ${player.position}`}>
                <div type="button"
                    onMouseEnter={ () => handleCardHover(player.player_data, player.position)}
                    onMouseLeave={ () => setMouseHover(false) }
                    onClick={() => actions.setPlayerDetailsPlayer(player.player_data, history)}
                    className={`player-container playercard cursor-pointer`}>
                        <PlayerCard player={player.player_data}/>
                        <div className="card-base">
                            {player.position}
                        </div>
                </div> 
            </div>
    )})

    // player selector
    const playerlist = document.querySelectorAll('.playerlist')
    function activePlayer() {
        playerlist.forEach((item) => {
        item.classList.remove('card-base-active')
        });
        this.classList.add('card-base-active');
    }
    function inactivePlayer() {
        playerlist.forEach((item) => {
        item.classList.remove('card-base-active')
        });
    }
    playerlist.forEach((item) =>
    item.addEventListener('mouseover', activePlayer))
    playerlist.forEach((item) =>
    item.addEventListener('mouseout', inactivePlayer))

    const handleCardHover = (hoverPlayer, squadPosition) => {
        //actions.setPlayerDetailsPlayer(squad.lst, history)
        //console.log('hovered player', hoverPlayer)
        setMouseHover(true)
        console.log(mouseHover)
        setPlayer(hoverPlayer)
        setPosition(squadPosition)

    }

    const handleLeagueClick = (usersquad, userleagueName, userleagueInt) => {
        // localStorage.setItem("league-selector", userleagueName)
        // localStorage.setItem("current-squad", usersquad)
        setSquad(usersquad)
        setLeague(userleagueName)
        
    }

    return (
        <div className="position-absolute w-75 h-100 d-flex flex-row mt-5" > 

{/* AQUI EMPIEZA EL COMPONENTE LEAGUES NAVIGATION EN VERSION OFFLINE, SIN BACKEND */}

                    {/* <div className="navigationBody">
                        <div className="navigation mb-3">
                            <ul>
                                <li className="list active">
                                    <button onClick={() => setSquad(actions.getHardCodedSquad())}>
                                        <span className="text">Premier League</span>
                                        <img className="league-img" src={`http://localhost:3000/13.png`}/>
                                    </button>
                                </li>
                                <li className="list">
                                    <button onClick={() => setSquad(actions.getHardCodedSquad())}>
                                        <span className="text">Ligue 1</span>
                                        <img className="league-img" src={`http://localhost:3000/16.png`}/>
                                    </button>
                                </li>
                                <li className="list">
                                    <button onClick={() => setSquad(actions.getHardCodedSquad())}>
                                        <span className="text">Bundesliga</span>
                                        <img className="league-img" src={`http://localhost:3000/19.png`}/>
                                    </button>
                                </li>
                                <li className="list">
                                    <button onClick={() => setSquad(actions.getHardCodedSquad())}>
                                        <span className="text">Serie A</span>
                                        <img className="league-img" src={`http://localhost:3000/31.png`}/>
                                    </button>
                                </li>
                                <li className="list">
                                    <button onClick={() => setSquad(actions.getHardCodedSquad())}>
                                        <span className="text">LaLiga</span>
                                        <img className="league-img" src={`http://localhost:3000/53.png`}/>
                                    </button>
                                </li>
                                <div className="indicator"></div>
                            </ul>
                        </div> 
            </div> */}

{/* AQUI TERMINA EL COMPONENTE LEAGUES NAVIGATION EN VERSION OFFLINE, SIN BACKEND */}


                    <div className="squad-container-squads field mt-3">
                        { players }
                    </div>
                    {/* AQUI EMPIEZA EL COMPONENTE LEAGUES NAVIGATION EN VERSION CON BACKEND */}
                    <div className='info-container position-relative d-flex flex-column ms-5 mt-3'>
                        <div className="navigationBody">
                            <div className="navigation">
                                <ul>
                                    <li className="list active">
                                        <button onClick={() => handleLeagueClick(store.plSquad, 'Premier League', 13)}>
                                            <span className="text">Premier League</span>
                                            <img className="league-img" src={`http://localhost:5000/api/v1/static/images/leagues/13.png`}/>
                                        </button>
                                    </li>
                                    <li className="list">
                                        <button onClick={() => handleLeagueClick(store.l1Squad, 'Ligue 1', 16)}>
                                            <span className="text">Ligue 1</span>
                                            <img className="league-img" src={`http://localhost:5000/api/v1/static/images/leagues/16.png`}/>
                                        </button>
                                    </li>
                                    <li className="list">
                                        <button onClick={() => handleLeagueClick(store.blSquad, 'Bundesliga', 19)}>
                                            <span className="text">Bundesliga</span>
                                            <img className="league-img" src={`http://localhost:5000/api/v1/static/images/leagues/19.png`}/>
                                        </button>
                                    </li>
                                    <li className="list">
                                        <button onClick={() => handleLeagueClick(store.saSquad, 'Serie A', 31)}>
                                            <span className="text">Serie A</span>
                                            <img className="league-img" src={`http://localhost:5000/api/v1/static/images/leagues/31.png`}/>
                                        </button>
                                    </li>
                                    <li className="list">
                                        <button onClick={() => handleLeagueClick(store.llSquad, 'LaLiga', 53)}>
                                            <span className="text">LaLiga</span>
                                            <img className="league-img" src={`http://localhost:5000/api/v1/static/images/leagues/53.png`}/>
                                        </button>
                                    </li>
                                    <div className="indicator"></div>
                                </ul>
                            </div> 
                        </div>
                        <div className='info-view d-flex flex-column mt-5 pt-3 ms-4 text-white text-defined'>
                            
                            
                            <div>
                                { mouseHover ? 
                                <div className="hover-view rounded d-flex flex-column justify-content-center align-items-center" id="info-collapse">
                                    <div className='hover-image d-flex justify-content-center align-items-center'>
                                        <img className="face" src={`http://localhost:5000/api/v1/static/images/faces/${player.global_id}.png`}/>
                                    </div>
                                    <div class="info-card rounded">
                                         <div className="stats-defined rounded">
                                            <table class="table table-sm text-start details-table">
                                                <thead>
                                                    <tr>
                                                        <th colspan="4" className="text-center">INFO</th>
                                                    </tr>
                                                    <tr>
                                                        <th colspan="4" className="text-start"><h5><bold>Position: {position}</bold></h5></th>
                                                    </tr>
                                                    <tr>
                                                        <th colspan="4" className="text-start"><h5><bold>Name: {player.name}</bold></h5></th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    <tr>
                                                        <td><b>Age</b></td>
                                                        <td>{player.age ? player.age : 'N/A'}</td>
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
                                </div>
                                :
                                <div className='hover-view pt-3 rounded text-center d-flex flex-column justify-content-between'>
                                    <div className='hover-view-top-half mb-5 d-flex flex-column align-items-center'>
                                        <div className='league-hover-div'>
                                            <img className="league-hover" src={`http://localhost:5000/api/v1/static/images/leagues/${squad[0].player_data.league}.png`}/>
                                        </div>
                                        <div className='w-100 mt-4'><h2>{league} Squad</h2></div>  
                                    <div>
                                        <div>
                                            Squad rating: {actions.getSquadRating(squad)}
                                        </div>
                                        <div className="d-flex flex-row align-items-center">
                                            Squad price: {actions.getSquadPrice(squad[0].player_data.league_str)}
                                            <img className="squad-coins-icon" src={`http://localhost:5000/api/v1/static/images/icons/futcoins.png`}/> 
                                            
                                        </div>
                                    </div>
                                    </div>
                                    <div className='mt-5 mb-5'><p>Hover on a player <br></br>
                                         to display card information</p></div>
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                    

{/* AQUI TERMINA EL COMPONENTE LEAGUES NAVIGATION EN VERSION CON BACKEND */}
                </div>

                
        
    )
}

export default Squads