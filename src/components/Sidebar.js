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
    
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
        <IconContext.Provider value={{color: '#C2ED63'}}>
            <div className="fixed-top sidebar">
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
                
            </div>
            
            
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                 
                <ul className='nav-menu-items' onClick={showSidebar}>
                    
                    <li className="sidebar-toogle d-flex flex-row text-white">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                        <h2>Hello, User</h2>
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




// const Sidebar = () => {
//     const { store, actions } = useContext(Context)
//     return (
//         <div id="sidebar" className="col-auto px-3 overflow-scroll collapse collapse-horizontal">

            
//                 <div id="sidebar-nav" className="list-group border-0 rounded-0 text-sm-start min-vh-100">
//                     <ul className="navbar-nav">

//                         <li className="nav-item my-3">
//                             <Link className="nav-link text-white" to="/">HOME</Link>
//                         </li>
//                         <li>
//                             <Link className="nav-link text-white" to="/players">PLAYERS</Link>
//                         </li>
//                         <li>
//                             <Link className="nav-link text-white" to="/squads">SQUADS</Link>
//                         </li>
//                         <li>
//                             <Link className="nav-link text-white" to="/userconfig">USER CONFIG</Link>
//                         </li>
//                     </ul>
//                 </div>
            

//         </div>



//     )
// }

// export default Sidebar



                    // <ul className="navbar-nav">
                    //             <li classNameName="nav-item my-3">
                    //                 <Link classNameName="nav-link text-white" to="/">HOME</Link>
                    //             </li>
                    //             <li>
                    //                 <Link classNameName="nav-link text-white" to="/players">PLAYERS</Link>
                    //             </li>
                    //             <li>
                    //                 <Link classNameName="nav-link text-white" to="/squads">SQUADS</Link>
                    //             </li>
                    //             <li>
                    //                 <Link classNameName="nav-link text-white" to="/userconfig">USER CONFIG</Link>
                    //             </li>
                    //         </ul>