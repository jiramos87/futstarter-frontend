import { Link } from 'react-router-dom'
import React, { useState, useContext } from 'react'
import { Context } from '../store/AppContext'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';



function Sidebar() {
    const [ sidebar, setSidebar ] = useState(false);
    const { store, actions } = useContext(Context)
    
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: '#C2ED63'}}>
            <div className="fixed-top sidebar d-flex flex-row justify-content-between">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                <Link to="/home">
                    <div className="display-4 text-white">FUTSTARTER</div>
                </Link>
                
            </div>
            
            
            <nav className={sidebar ? 'nav-menu active mt-5' : 'nav-menu mt-5' }>
            
                <ul className='nav-menu-items' onClick={showSidebar}>
                    
                    <li className="sidebar-toggle d-flex flex-row text-white">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                        <h2>Hello, {store.currentUser?.username}</h2>
                    </li>

                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar