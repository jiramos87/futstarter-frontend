import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/AppContext'
import PlayerCard from '../components/PlayerCard';
import './Squads.css';
import { Link } from 'react-router-dom';

const Players = () => {
    
    const { store, actions } = useContext(Context)
    // const [ squad, setSquad ] = useState(store.plList)   //this is the real deal
    const [ list, setList ] = useState(actions.getHardCodedPlayerList().data)   // this is only for developing whithout backend
    console.log('list[0] :', list[0])
    
 
    return (
        <div className="row mt-5 pt-5"> 
                <div className="col-2">
                    
                </div>
                <div className="col-8 d-flex align-items-center justify-content-center px-0 mx-0">
                    
                    <table class="table table-dark">
                        <thead>
                            <tr>
                            <th scope="col">Player ID</th>
                            <th scope="col">Name</th>
                            <th scope="col">Rating</th>
                            <th scope="col">Meta Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <th scope="row">1</th>
                            <td>{list[0].name}</td>
                            <td>{list[0].rating}</td>
                            <td>{list[0].cst_meta_rating}</td>
                            </tr>
                            <tr>
                            <th scope="row">2</th>
                            <td>{list[1].name}</td>
                            <td>{list[1].rating}</td>
                            <td>{list[1].cst_meta_rating}</td>
                            </tr>
                            <tr>
                            <th scope="row">3</th>
                            <td>{list[2].name}</td>
                            <td>{list[2].rating}</td>
                            <td>{list[2].cst_meta_rating}</td>
                            </tr>
                        </tbody>
                    </table>
                        
                    
                </div>
                {/* <div className="col-2">
                    <div className="mt-5 pt-5 d-flex flex-column justify-content-start">
                        <button className="btn btn-primary border border-warning" onClick={() => setList(store.plList)}>Premier league</button>
                        <button className="btn btn-primary border border-warning" onClick={() => setList(store.l1List)}>Ligue 1</button>
                        <button className="btn btn-primary border border-warning" onClick={() => setList(store.blList)}>Bundesliga</button>
                        <button className="btn btn-primary border border-warning" onClick={() => setList(store.saList)}>Serie A</button>
                        <button className="btn btn-primary border border-warning" onClick={() => setList(store.llList)}>LaLiga</button>
                    </div> 
                </div> */}
                <div className="col-2">
                    <div className="mt-5 pt-5 d-flex flex-column justify-content-start">
                        <button className="btn btn-primary border border-warning" onClick={() => setList(actions.getHardCodedPlayerList())}>Premier league</button>
                        <button className="btn btn-primary border border-warning" onClick={() => setList(actions.getHardCodedPlayerList())}>Ligue 1</button>
                        <button className="btn btn-primary border border-warning" onClick={() => setList(actions.getHardCodedPlayerList())}>Bundesliga</button>
                        <button className="btn btn-primary border border-warning" onClick={() => setList(actions.getHardCodedPlayerList())}>Serie A</button>
                        <button className="btn btn-primary border border-warning" onClick={() => setList(actions.getHardCodedPlayerList())}>LaLiga</button>
                    </div> 
                </div>

            </div>
        
    )
}

export default Players