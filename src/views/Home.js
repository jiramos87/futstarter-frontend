import React, { useContext } from "react"
import Login from "./Login"
import { Context } from "../store/AppContext"
import { Link } from "react-router-dom"
// import Popular from "./Popular"

const Home = () => {
    const { store, actions } = useContext(Context)
    return (
        <div className="background">
            <div className="container">
                <div className="row">
                    <div className="mx-auto">
                        {store.currentUser  === null ? 
                            <div className="d-flex flex-column">
                                
                                <Login />
                                
                            </div>
                            :
                            <div className="display-2"> Welcome, {store.currentUser?.username}</div>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home


