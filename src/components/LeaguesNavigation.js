import React, { useState, useContext } from 'react'
import { Context } from '../store/AppContext'
import { Link } from 'react-router-dom'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import './LeaguesNavigation.css';

function LeaguesNavigation() {

    const { store, actions } = useContext(Context)
    // const [ squad, setSquad ] = useState(store.l1Squad)   //this is the real deal
    const [ squad, setSquad ] = useState(actions.getHardCodedSquad())   // this is only for developing whithout backend
    console.log('squad.lst :', squad.lst)

    const list = document.querySelectorAll('.list');
    function activeLink() {
        list.forEach((item) =>
        item.classList.remove('active'));
        this.classList.add('active');
    }
    list.forEach((item) =>
    item.addEventListener('click', activeLink));


    return (
        <div>
            <div className="navigation">
                <ul>
                    <li className="list active">
                        <a href="#">
                            <span className="text">Premier League</span>
                            <span className="icon" onClick={() => setSquad(actions.getHardCodedSquad())}><AiIcons.AiFillHome /></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="text">Ligue 1</span>
                            <span className="icon" onClick={() => setSquad(actions.getHardCodedSquad())}><AiIcons.AiFillHome /></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="text">Bundesliga</span>
                            <span className="icon" onClick={() => setSquad(actions.getHardCodedSquad())}><AiIcons.AiFillHome /></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="text">Serie A</span>
                            <span className="icon" onClick={() => setSquad(actions.getHardCodedSquad())}><AiIcons.AiFillHome /></span>
                        </a>
                    </li>
                    <li className="list">
                        <a href="#">
                            <span className="text">LaLiga</span>
                            <span className="icon" onClick={() => setSquad(actions.getHardCodedSquad())}><AiIcons.AiFillHome /></span>
                        </a>
                    </li>
                    <div className="indicator"></div>
                </ul>
            </div>
            
            {/* <div className="col-2">
                <div className="mt-5 pt-5 d-flex flex-column justify-content-start">
                    <button className="btn btn-primary border border-warning" onClick={() => setSquad(actions.getHardCodedSquad())}>Premier league</button>
                    <button className="btn btn-primary border border-warning" onClick={() => setSquad(actions.getHardCodedSquad())}>Ligue 1</button>
                    <button className="btn btn-primary border border-warning" onClick={() => setSquad(actions.getHardCodedSquad())}>Bundesliga</button>
                    <button className="btn btn-primary border border-warning" onClick={() => setSquad(actions.getHardCodedSquad())}>Serie A</button>
                    <button className="btn btn-primary border border-warning" onClick={() => setSquad(actions.getHardCodedSquad())}>LaLiga</button>
                </div> 
            </div> */}
        </div>
    )
}

export default LeaguesNavigation;
