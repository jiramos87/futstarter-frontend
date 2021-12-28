import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/AppContext'
import PlayerCard from '../components/PlayerCard';
import { Link, useHistory } from 'react-router-dom';
import './Squads.css';
import './SquadCreator.css';
import './LeaguesNavigation.css';
import './NavigationPosition.css'
    

const SquadCreator = () => {
    
    const { store, actions } = useContext(Context)
    console.log('user squad formation:', store.user_formation)
    console.log('store squad creator squad:', store.squadCreatorSquad)
    // let currentSquad = localStorage.getItem('current-squad') != null ? JSON.parse(localStorage.getItem('current-squad')) : store.plSquade
    let squad_formation = ''
    if(store.squadCreatorSquad === null) {
        squad_formation = '442'
    } else{
        squad_formation = store.squadCreatorSquad.formation
    }
    console.log('squad_formation:', squad_formation )
    const [ formation, setFormation ] = useState(squad_formation)
    const [ positions, setPositions ] = useState(actions.formationInterpreter(formation))

    useEffect(() => {
        if(store.squadCreatorSquad != null) {
            for(let i = 0; i <= 10; i++) {
                actions.getPlayerByID(store.squadCreatorSquad.squad_data[i], positions[i], i)
            }
        } 
    }, [])

    let userSquad = [
        {position: positions[0], player_data: store.squadCreator0.player_data},
        {position: positions[1], player_data: store.squadCreator1.player_data},
        {position: positions[2], player_data: store.squadCreator2.player_data},
        {position: positions[3], player_data: store.squadCreator3.player_data},
        {position: positions[4], player_data: store.squadCreator4.player_data},
        {position: positions[5], player_data: store.squadCreator5.player_data},
        {position: positions[6], player_data: store.squadCreator6.player_data},
        {position: positions[7], player_data: store.squadCreator7.player_data},
        {position: positions[8], player_data: store.squadCreator8.player_data},
        {position: positions[9], player_data: store.squadCreator9.player_data},
        {position: positions[10], player_data: store.squadCreator10.player_data}
    ]

    let squad_name = store.squadCreatorSquad == null ? '' : store.squadCreatorSquad.squad_name
    const [ playerIndex, setPlayerIndex ] = useState(0)
   
    const [ squad, setSquad ] = useState(userSquad)  
    const [ squadName, setSquadName ] = useState(squad_name)
    const [ mouseHover, setMouseHover ] = useState(false)
    const [ displaySearch, setDisplaySearch ] = useState(false)
    const [ displayActions, setDisplayActions ] = useState(false)
    const [ player, setPlayer ] = useState(store.PlayerDetailsPlayer) 
    const [ hoverPlayerIndex, setHoverPlayerIndex ] = useState(null)
    const [ selectedPlayer, setSelectedPlayer ] = useState(null)
    const [ position, setPosition ] = useState('')
    const [ searchString, setSearchString ] = useState('')
    const [ searchResults, setSearchResults ] = useState([])
    const [ errorMessage, setErrorMessage] = useState(false)
    const [ message, setMessage ] = useState(false)
    

    const history = useHistory()    
    // console.log('display search: ', displaySearch)
    // console.log('selected player: ', selectedPlayer)
    // console.log('search results: ', searchResults)

    console.log('squad:', userSquad)

    let results = []
    results = searchResults.map((result) => {
        return (
            <div onClick={() => handleSearchClick(result, position)} className="d-flex flex-row align-items-center border">
                <img className="face-search w-25" src={`http://localhost:5000/api/v1/static/images/faces/${result.global_id}.png`}/>
                <div className='w-75 d-flex flex-column align-items-start justify-content-between py-2'>
                  <p className="text-white ">{result.common_name}</p>
                  <img className="nation" src={`http://localhost:5000/api/v1/static/images/nations/${result.nation}.png`}/>
                </div>
            </div>
        )
    })

    let players = userSquad.map((user_player, index) => {
        //console.log(user_player.player_data)
        return (
            <div className={`${user_player.position} `}>
                { user_player.player_data != null ? 
                    <div onMouseLeave={ () => setDisplayActions(false)}>
                        <div type="button"
                            onMouseEnter={ () => handleCardHover(index, user_player.position)}
                            onClick={() => actions.setPlayerDetailsPlayer(user_player.player_data, history)}
                            className="player-container playercard cursor-pointer">
                                <PlayerCard player={user_player.player_data}/>
                                <div className='card-base'>
                                  {user_player.position}
                                </div>
                        </div>
                        {
                            displayActions && hoverPlayerIndex == index? 
                            <div onClick={() => handleRemovePlayerClick(user_player.position, index)} className={`btn btn-danger close-btn ${user_player.position}`}>
                                    x
                            </div> 
                            : ''
                        }
                    </div>
                    :
                    <div type="button"
                        onClick={() => handleAddPlayerClick(user_player.position, index)}
                        className="cursor-pointer">
                            <div className="btn btn-dark border rounded text-white text-center add-button">
                                +
                            </div>
                            <div className='card-base'>
                               {user_player.position} 
                            </div>
                    </div>
                }
            </div>
    )})

    const handleFormationChange = (user_formation) => {
        actions.setUserFormation(user_formation)
        setFormation(user_formation)
        setPositions(actions.formationInterpreter(user_formation))
    }

    const handleCardHover = (hover_player_index, position_string) => {
        //actions.setPlayerDetailsPlayer(squad.lst, history)
        //console.log('hovered player', hoverPlayer)
        setMouseHover(true)
        setDisplayActions(true)
        setHoverPlayerIndex(hover_player_index)
        setPosition(position_string)
        //setPosition(squadPosition)
        // console.log('hovered on ', hoverPlayer.name, 'in position ', position_string, 'click to remove from squad')
        // console.log('display actions true')
        
    }

    const handleAddPlayerClick = (position_string, player_index) => {
        setDisplaySearch(true)
        setPosition(position_string)
        setPlayerIndex(player_index)
    }

    const handleRemovePlayerClick = (position_string, player_index) => {
        console.log('remove ', position_string, player_index)
        actions.removePlayer(position_string, player_index)
       
    }

    const handleSearchChange = (event) => {
        setSearchString(event.target.value)
        actions.searchPlayerByName(event.target.value)
        setSearchResults(store.searchPlayerResult)
    }

    const handleSearchClick = (selectedplayer, player_position) => {
        console.log('selected player: ', selectedplayer, 'position: ', position, 'player index: ', playerIndex)
        setSelectedPlayer(selectedplayer)
        actions.addPlayer(selectedplayer, player_position, playerIndex)
           
        
        // if(position == 'LST') {
        //     setSquad({...squad, lst: store.squadCreatorLST})
        // } else if (position == 'RST') {
        //     setSquad({...squad, rst: store.squadCreatorRST})
        // } else if (position == 'LM') {
        //     setSquad({...squad, lm: store.squadCreatorLM})
        // } else if (position == 'LCM') {
        //     setSquad({...squad, lcm: store.squadCreatorLCM})
        // } else if (position == 'RCM') {
        //     setSquad({...squad, rcm: store.squadCreatorRCM})
        // } else if (position == 'RM') {
        //     setSquad({...squad, rm: store.squadCreatorRM})
        // } else if (position == 'LB') {
        //     setSquad({...squad, lb: store.squadCreatorLB})
        // } else if (position == 'LCB') {
        //     setSquad({...squad, lcb: store.squadCreatorLCB})
        // } else if (position == 'RCB') {
        //     setSquad({...squad, rcb: store.squadCreatorRCB})
        // } else if (position == 'RB') {
        //     setSquad({...squad, rb: store.squadCreatorRB})
        // } else if (position == 'GK') {
        //     setSquad({...squad, gk: store.squadCreatorGK})
        // }
        setDisplaySearch(false)
        setPosition('')
        setSearchString('')
        setSearchResults([])
    
    }

    const handleSquadNameChange = (e) => {
        let squad_name = e.target.value
        setSquadName(squad_name)
    }

    const handleSquadNameSubmit = (e) => {
        e.preventDefault()
        //console.log(userSquad, formation, squadName, store.token)
        actions.saveSquad(userSquad, formation, squadName, store.token)
        setMessage(true)
        setTimeout(() => {
            setMessage(false)
          }, 3000);
        
    }

    const handleNewSquad = () => {
        setFormation('442')
        setSquadName('')
        for(let i = 0; i < 11; i++) {
            actions.removePlayer(positions[i], i)
        }
    }


    return (
        <div className="position-absolute w-75 d-flex flex-row mt-5" > 

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


                    <div className="squad-container-squad-creator field mt-3">
                        { players }
                    </div>
                    

                    <div className='info-container position-relative d-flex flex-column ms-5'>
                        <div className="navigationFormationMacro">
                            <div onClick={handleNewSquad} className='btn w-25 rounded borded-white'> New squad </div>
                            <div className="row mb-5">
                                <div className="navigationSaveSquad">
                                    <div className="col-4 navigationFormationText">Squad name</div>
                                    <div className="col-8 d-flex flex-row">
                                        <input type="text" id="squadname-input" className="rounded ps-3" placeholder="Insert squad name..." value={squadName} onChange={handleSquadNameChange} />
                                        <button className='btn rounded navigationSaveSquadText' onClick={handleSquadNameSubmit}>Save</button>
                                    </div>
                                    {
                                        message ? 
                                        <div>
                                            <p className='text-white'>Squad saved</p>
                                        </div>
                                        :
                                        ''
                                    }
                                </div> 
                            </div>
                            
                            <div className="row mt-5">
                                <div className="col-4 navigationFormationText d-flex flex-column justify-content-center align-items-center">
                                    <div className="">
                                        Formation
                                    </div>
                                </div>
                                <div className="col-8">
                                    <div className="navigationFormationBody">
                                        <div className='d-flex flex-row navigationFormation'>
                                            <button type="button" className='btn navigationFormationButtons Formation442' 
                                                    onClick={() => handleFormationChange('442') }> 
                                                        442 
                                            </button>
                                            <button type="button" className='btn navigationFormationButtons Formation433' 
                                                    onClick={() => handleFormationChange('433') }> 
                                                        433
                                            </button>
                                        </div>
                                    </div> 
                                </div>
                        
                            </div> 
                        </div>

                        <div className='info-view d-flex flex-column mt-5 pt-3 ms-4 text-white text-defined'>
                            <div>
                                { displaySearch ? 
                                <div className="search-view searchButton rounded d-flex flex-column justify-content-center align-items-center" id="info-collapse">
                                    <div>
                                        <input type="text" value={searchString} placeholder="Search player..." onChange={handleSearchChange}></input>
                                        <div className="results-card d-flex flex-column">
                                            { searchResults == [] ? 'No results found' : results }
                                        </div>
                                    </div>
                                </div>      
                                :
                                <div className='search-view pt-3 rounded text-center d-flex flex-column justify-content-between'>
                                    <div className='hover-view-top-half mb-5 d-flex flex-column align-items-center'>
                                        
                                        <div className='w-100 mt-4'><h2>User Squad</h2></div>  
                                        <div>
                                            <div>
                                                Squad rating: 99
                                            </div>
                                            <div className="d-flex flex-row align-items-center">
                                                Squad price: 1000000
                                                <img className="squad-coins-icon" src={`http://localhost:5000/api/v1/static/images/icons/futcoins.png`}/> 
                                                
                                            </div>
                                        </div>
                                    </div>
                                   
                                </div>
                                }
                            </div>
                        </div>
                    </div>
                    
                </div>

                
        
    )
}

export default SquadCreator