import React, { useContext, useState } from 'react'
import { Context } from '../store/AppContext'
import PlayerCard from '../components/PlayerCard';
import { Link, useHistory } from 'react-router-dom';
import './Squads.css';
import './LeaguesNavigation.css';
    

const SquadCreator = () => {
    
    const { store, actions } = useContext(Context)
    // let currentSquad = localStorage.getItem('current-squad') != null ? JSON.parse(localStorage.getItem('current-squad')) : store.plSquade
    let userSquad = {
        lst: store.squadCreatorLST,
        rst: store.squadCreatorRST,
        lm: store.squadCreatorLM,
        lcm: store.squadCreatorLCM,
        rcm: store.squadCreatorRCM,
        rm: store.squadCreatorRM,
        lb: store.squadCreatorLB,
        lcb: store.squadCreatorLCB,
        rcb: store.squadCreatorRCB,
        rb: store.squadCreatorRB,
        gk: store.squadCreatorGK
    }
    const [ formation, setFormation ] = useState('442')
    const [ positions, setPositions ] = useState(actions.formationInterpreter('442'))
   
    const [ squad, setSquad ] = useState(userSquad)  
    const [ mouseHover, setMouseHover ] = useState(false)
    const [ displaySearch, setDisplaySearch ] = useState(false)
    const [ displayActions, setDisplayActions ] = useState(false)
    const [ player, setPlayer ] = useState(store.PlayerDetailsPlayer) 
    const [ selectedPlayer, setSelectedPlayer ] = useState(null)
    const [ position, setPosition ] = useState('')
    const [ searchString, setSearchString ] = useState('')
    const [ searchResults, setSearchResults ] = useState([])

    const history = useHistory()
    // console.log('squad.lst en squadcreator', squad.lst)
    // console.log('display search: ', displaySearch)
    // console.log('selected player: ', selectedPlayer)
    // console.log('search results: ', searchResults)

    let results = []

    results = searchResults.map((result) => {
        return (
            <div onClick={() => handleSearchClick(result)} className="d-flex flex-row align-items-center border">
                <img className="face-search w-25" src={`http://localhost:5000/api/v1/static/images/faces/${result.global_id}.png`}/>
                <div className='w-75 d-flex flex-column align-items-start justify-content-between py-2'>
                  <p className="text-white ">{result.common_name}</p>
                  <img className="nation" src={`http://localhost:5000/api/v1/static/images/nations/${result.nation}.png`}/>
                </div>
            </div>
        )
    })

    const handleFormationChange = (user_formation) => {
        setFormation(user_formation)
        setPositions(actions.formationInterpreter(user_formation))
    }

    const handleCardHover = (hoverPlayer, position_string) => {
        //actions.setPlayerDetailsPlayer(squad.lst, history)
        //console.log('hovered player', hoverPlayer)
        setMouseHover(true)
        setDisplayActions(true)
        setPlayer(hoverPlayer)
        setPosition(position_string)
        //setPosition(squadPosition)
        // console.log('hovered on ', hoverPlayer.name, 'in position ', position_string, 'click to remove from squad')
        // console.log('display actions true')
        
    }

    const handleAddPlayerClick = (position_string) => {
        setDisplaySearch(true)
        setPosition(position_string)
    }

    const handleRemovePlayerClick = (position_string) => {
        console.log('remove ', position_string)
        actions.removePlayer(position_string)
        if(position_string == 'LST') {
            setSquad({...squad, lst: null})
        } else if (position_string == 'RST') {
            setSquad({...squad, rst: null})
        } else if (position_string == 'LM') {
            setSquad({...squad, lm: null})
        } else if (position_string == 'LCM') {
            setSquad({...squad, lcm: null})
        } else if (position_string == 'RCM') {
            setSquad({...squad, rcm: null})
        } else if (position_string == 'RM') {
            setSquad({...squad, rm: null})
        } else if (position_string == 'LB') {
            setSquad({...squad, lb: null})
        } else if (position_string == 'LCB') {
            setSquad({...squad, lcb: null})
        } else if (position_string == 'RCB') {
            setSquad({...squad, rcb: null})
        } else if (position_string == 'RB') {
            setSquad({...squad, rb: null})
        } else if (position_string == 'GK') {
            setSquad({...squad, gk: null})
        }
    }

    const handleSearchChange = (event) => {
        setSearchString(event.target.value)
        actions.searchPlayerByName(event.target.value)
        setSearchResults(store.searchPlayerResult)
    }

    const handleSearchClick = (selectedplayer) => {
        console.log('selected player: ', selectedplayer, 'position: ', position)
        setSelectedPlayer(selectedplayer)
        actions.addPlayer(selectedplayer, position)
        if(position == 'LST') {
            setSquad({...squad, lst: store.squadCreatorLST})
        } else if (position == 'RST') {
            setSquad({...squad, rst: store.squadCreatorRST})
        } else if (position == 'LM') {
            setSquad({...squad, lm: store.squadCreatorLM})
        } else if (position == 'LCM') {
            setSquad({...squad, lcm: store.squadCreatorLCM})
        } else if (position == 'RCM') {
            setSquad({...squad, rcm: store.squadCreatorRCM})
        } else if (position == 'RM') {
            setSquad({...squad, rm: store.squadCreatorRM})
        } else if (position == 'LB') {
            setSquad({...squad, lb: store.squadCreatorLB})
        } else if (position == 'LCB') {
            setSquad({...squad, lcb: store.squadCreatorLCB})
        } else if (position == 'RCB') {
            setSquad({...squad, rcb: store.squadCreatorRCB})
        } else if (position == 'RB') {
            setSquad({...squad, rb: store.squadCreatorRB})
        } else if (position == 'GK') {
            setSquad({...squad, gk: store.squadCreatorGK})
        }
        setDisplaySearch(false)
        setPosition('')
        setSearchString('')
        setSearchResults([])
    
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


                    <div className="squad-container position-relative field mt-3">
                            <div className="row mt--1 h-auto">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                
                                { squad.lst != null ? 
                                    <div>
                                        <div type="button"
                                            onMouseEnter={ () => handleCardHover(squad.lst, 'LST')}
                                            onMouseLeave={ () => setMouseHover(false)}
                                            onClick={() => actions.setPlayerDetailsPlayer(squad.lst, history)}
                                            className="col playercard LST cursor-pointer">
                                                <PlayerCard player={squad.lst}/>
                                                <div className='card-base'>
                                                    LST
                                                </div>
                                        </div>
                                        {
                                            displayActions ? 
                                            <div onClick={() => handleRemovePlayerClick('LST')} className='btn btn-danger'>
                                                 x
                                            </div> 
                                            : ''
                                        }
                                    </div>
                                    :
                                    <div type="button"
                                        onClick={() => handleAddPlayerClick('LST')}
                                        className="col playercard LST cursor-pointer">
                                            <div className="btn btn-dark border rounded text-white text-center add-button">
                                                +
                                            </div>
                                            <div className='card-base'>
                                                LST
                                            </div>
                                    </div>
                                }
                           
                                <div className="col"></div>
                                { squad.rst != null ? 
                                    <div type="button"
                                        onClick={() => actions.setPlayerDetailsPlayer(squad.rst, history)}
                                        className="col playercard RST cursor-pointer">
                                            <PlayerCard player={squad.rst}/>
                                            <div className='card-base'>
                                                RST
                                            </div>
                                    </div>
                                    :
                                    <div type="button"
                                        onClick={() => handleAddPlayerClick('RST')}
                                        className="col playercard RST cursor-pointer">
                                            <div className="btn btn-dark border rounded text-white add-button">
                                                +
                                            </div>
                                            <div className='card-base'>
                                                RST
                                            </div>
                                    </div>
                                }
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                           
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                            <div className="row">
                            { squad.lm != null ? 
                                    <div type="button"
                                        onClick={() => actions.setPlayerDetailsPlayer(squad.lm, history)}
                                        className="col playercard LM cursor-pointer">
                                            <PlayerCard player={squad.lm}/>
                                            <div className='card-base'>
                                                LM
                                            </div>
                                    </div>
                                    :
                                    <div type="button"
                                        onClick={() => handleAddPlayerClick('LM')}
                                        className="col playercard LM cursor-pointer">
                                            <div className="btn btn-dark border rounded text-white add-button">
                                                +
                                            </div>
                                            <div className='card-base'>
                                                LM
                                            </div>
                                    </div>
                                }
                                <div className="col"></div>
                                <div className="col"></div>
                                { squad.lcm != null ? 
                                    <div type="button"
                                        onClick={() => actions.setPlayerDetailsPlayer(squad.lcm, history)}
                                        className="col playercard LCM cursor-pointer">
                                            <PlayerCard player={squad.lcm}/>
                                            <div className='card-base'>
                                                LCM
                                            </div>
                                    </div>
                                    :
                                    <div type="button"
                                        onClick={() => handleAddPlayerClick('LCM')}
                                        className="col playercard LCM cursor-pointer">
                                            <div className="btn btn-dark border rounded text-white add-button">
                                                +
                                            </div>
                                            <div className='card-base'>
                                                LCM
                                            </div>
                                    </div>
                                }
                                <div className="col"></div>
                                { squad.rcm != null ? 
                                    <div type="button"
                                        onClick={() => actions.setPlayerDetailsPlayer(squad.rcm, history)}
                                        className="col playercard RCM cursor-pointer">
                                            <PlayerCard player={squad.rcm}/>
                                            <div className='card-base'>
                                                RCM
                                            </div>
                                    </div>
                                    :
                                    <div type="button"
                                        onClick={() => handleAddPlayerClick('RCM')}
                                        className="col playercard RCM cursor-pointer">
                                            <div className="btn btn-dark border rounded text-white add-button">
                                                +
                                            </div>
                                            <div className='card-base'>
                                                RCM
                                            </div>
                                    </div>
                                }
                                <div className="col"></div>
                                <div className="col"></div>
                                { squad.rm != null ? 
                                    <div type="button"
                                        onClick={() => actions.setPlayerDetailsPlayer(squad.rm, history)}
                                        className="col playercard RM cursor-pointer">
                                            <PlayerCard player={squad.rm}/>
                                            <div className='card-base'>
                                                RM
                                            </div>
                                    </div>
                                    :
                                    <div type="button"
                                        onClick={() => handleAddPlayerClick('RM')}
                                        className="col playercard RM cursor-pointer">
                                            <div className="btn btn-dark border rounded text-white add-button">
                                                +
                                            </div>
                                            <div className='card-base'>
                                                RM
                                            </div>
                                    </div>
                                }
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                            <div className="row">
                                { squad.lb != null ? 
                                    <div type="button"
                                        onClick={() => actions.setPlayerDetailsPlayer(squad.lb, history)}
                                        className="col playercard LB cursor-pointer">
                                            <PlayerCard player={squad.lb}/>
                                            <div className='card-base'>
                                                LB
                                            </div>
                                    </div>
                                    :
                                    <div type="button"
                                        onClick={() => handleAddPlayerClick('LB')}
                                        className="col playercard LB cursor-pointer">
                                            <div className="btn btn-dark border rounded text-white add-button">
                                                +
                                            </div>
                                            <div className='card-base'>
                                                LB
                                            </div>
                                    </div>
                                } 
                                <div className="col"></div>
                                <div className="col"></div>
                                { squad.lcb != null ? 
                                    <div type="button"
                                        onClick={() => actions.setPlayerDetailsPlayer(squad.lcb, history)}
                                        className="col playercard LCB cursor-pointer">
                                            <PlayerCard player={squad.lcb}/>
                                            <div className='card-base'>
                                                LCB
                                            </div>
                                    </div>
                                    :
                                    <div type="button"
                                        onClick={() => handleAddPlayerClick('LCB')}
                                        className="col playercard LCB cursor-pointer">
                                            <div className="btn btn-dark border rounded text-white add-button">
                                                +
                                            </div>
                                            <div className='card-base'>
                                                LCB
                                            </div>
                                    </div>
                                }
                                <div className="col"></div>
                                { squad.rcb != null ? 
                                    <div type="button"
                                        onClick={() => actions.setPlayerDetailsPlayer(squad.rcb, history)}
                                        className="col playercard RCB cursor-pointer">
                                            <PlayerCard player={squad.rcb}/>
                                            <div className='card-base'>
                                                RCB
                                            </div>
                                    </div>
                                    :
                                    <div type="button"
                                        onClick={() => handleAddPlayerClick('RCB')}
                                        className="col playercard RCB cursor-pointer">
                                            <div className="btn btn-dark border rounded text-white add-button">
                                                +
                                            </div>
                                            <div className='card-base'>
                                                RCB
                                            </div>
                                    </div>
                                }
                                <div className="col"></div>
                                <div className="col"></div>
                                { squad.rb != null ? 
                                    <div type="button"
                                        onClick={() => actions.setPlayerDetailsPlayer(squad.rb, history)}
                                        className="col playercard RB cursor-pointer">
                                            <PlayerCard player={squad.rb}/>
                                            <div className='card-base'>
                                                RB
                                            </div>
                                    </div>
                                    :
                                    <div type="button"
                                        onClick={() => handleAddPlayerClick('RB')}
                                        className="col playercard RB cursor-pointer">
                                            <div className="btn btn-dark border rounded text-white add-button">
                                                +
                                            </div>
                                            <div className='card-base'>
                                                RB
                                            </div>
                                    </div>
                                } 
                            </div>
                            <div className="row">
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                { squad.gk != null ? 
                                    <div type="button"
                                        onClick={() => actions.setPlayerDetailsPlayer(squad.gk, history)}
                                        className="col playercard GK cursor-pointer">
                                            <PlayerCard player={squad.gk}/>
                                            <div className='card-base'>
                                                GK
                                            </div>
                                    </div>
                                    :
                                    <div type="button"
                                        onClick={() => handleAddPlayerClick('GK')}
                                        className="col playercard GK cursor-pointer">
                                            <div className="btn btn-dark border rounded text-white add-button">
                                                +
                                            </div>
                                            <div className='card-base'>
                                                GK
                                            </div>
                                    </div>
                                }
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                                <div className="col"></div>
                            </div>
                    
                        </div>
                    

                    <div className='info-container position-relative d-flex flex-column ms-5'>
                        <div className="navigationBody">
                            <div className="navigation text-white">
                               Choose a formation
                               <div className='rounded py-3 px-3 w-75 d-flex flex-row justify-content-between'>
                                    <button type="button" className='btn btn-dark btn-sm rounded w-25' 
                                            onClick={() => handleFormationChange('442') }> 
                                                442 
                                            </button>
                                    <button type="button" className='btn btn-dark btn-sm rounded w-25' 
                                            onClick={() => handleFormationChange('433') }> 
                                                433
                                            </button>
                               </div>
                            </div> 
                        </div>

                        <div className='info-view d-flex flex-column mt-5 pt-3 ms-4 text-white text-defined'>
                            <div>
                                { displaySearch ? 
                                <div className="search-view rounded d-flex flex-column justify-content-center align-items-center" id="info-collapse">
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