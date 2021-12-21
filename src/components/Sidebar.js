import { Link } from 'react-router-dom'
import React, { useState, useContext } from 'react'
import { Context } from '../store/AppContext'
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
import './Sidebar.css';
import { IconContext } from 'react-icons';
import * as GoIcons from "react-icons/go";



  
function Sidebar() {
    const [ sidebar, setSidebar ] = useState(false);
    const { store, actions } = useContext(Context)
    
    const showSidebar = () => setSidebar(!sidebar);
    const handleLogout = () => {
        actions.logout()
    }

    return (
        <>
        <IconContext.Provider value={{color: '#C2ED63'}}>
            <div className="fixed-top sidebar d-flex flex-row justify-content-between">
                <div className="col-3 d-flex flex-row align-items-center">
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar} />
                    </Link>
                    <Link to="/home">
                        <div className="h3 ms-3 mt-3 text-white">FUTSTARTER</div>
                    </Link>
                </div>
                <div className="col-7"></div>
                <div className="col-3 d-flex flex-row justify-content-start align-items-center ms-5 px-5" >
                    
                    {store.currentUser  === null ? 
                        
                        <Link to="/login">
                            <div className='top-log-icon d-flex align-items-center justify-content-start'>
                                <GoIcons.GoSignIn />
                            </div>
                        </Link>
                        
                        :
                        <Link to="/login">
                            <button className='top-log-icon' onClick={() => handleLogout()}><GoIcons.GoSignOut /></button>
                        </Link>
                        }
                    
                </div>
                
            </div>
            
            
            <nav className={sidebar ? 'nav-menu active d-flex flex-column' : 'nav-menu d-flex flex-column' }>
            
                <ul className='nav-menu-items' onClick={showSidebar}>
                    
                    <li className="sidebar-toggle d-flex flex-row border-top border-bottom border-white mb-3">
                        {/* <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link> */}
                        
                        <div>
                            {store.currentUser  === null ? 
                                <Link to="/login" className='nav-text'>
                                    <GoIcons.GoSignIn />
                                    <button><span>Login</span></button>
                                </Link>
                                :
                                <Link to="/login" className='nav-text'>
                                    <h3 className='px-1 w-auto'>{store.currentUser?.username}</h3>
                                    <button className='text-white border border-dark rounded' onClick={() => handleLogout()}><GoIcons.GoSignOut />Logout</button>
                                </Link>
                            }
                        </div>
                    </li>

                    { store.currentUser === null ? 
                        SidebarData.map((item, index) => {
                            return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                        )
                    })
                    :   <div>
                            <li className={SidebarData[0].cName}>
                                <Link to={SidebarData[0].path}>
                                    {SidebarData[0].icon}
                                    <span>{SidebarData[0].title}</span>
                                </Link>
                            </li> 
                            <li className={SidebarData[1].cName}>
                                <Link to={SidebarData[1].path}>
                                    {SidebarData[1].icon}
                                    <span>{SidebarData[1].title}</span>
                                </Link>
                            </li>
                            <li className={SidebarData[2].cName}>
                                <Link to={SidebarData[2].path}>
                                    {SidebarData[2].icon}
                                    <span>{SidebarData[2].title}</span>
                                </Link>
                            </li>
                            <li className={SidebarData[3].cName}>
                                <Link to={SidebarData[3].path}>
                                    {SidebarData[3].icon}
                                    <span>{SidebarData[3].title}</span>
                                </Link>
                            </li>
                        </div>
                }
                    

                </ul>
                
            </nav>
            </IconContext.Provider>
        </>
    )
}

export default Sidebar