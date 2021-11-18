import { Link } from 'react-router-dom'
import React, { useContext } from 'react'
import { Context } from '../store/AppContext'

const Sidebar = () => {
    const { store, actions } = useContext(Context)
    return (
        <div id="sidebar" className="col-auto px-3 overflow-scroll collapse collapse-horizontal">

            
                <div id="sidebar-nav" className="list-group border-0 rounded-0 text-sm-start min-vh-100">
                    <ul className="navbar-nav">

                        <li className="nav-item my-3">
                            <Link className="nav-link text-white" to="/">HOME</Link>
                        </li>
                        <li>
                            <Link className="nav-link text-white" to="/players">PLAYERS</Link>
                        </li>
                        <li>
                            <Link className="nav-link text-white" to="/squads">SQUADS</Link>
                        </li>
                        <li>
                            <Link className="nav-link text-white" to="/userconfig">USER CONFIG</Link>
                        </li>
                    </ul>
                </div>
            

        </div>



    )
}

export default Sidebar



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