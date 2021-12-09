import React, { useContext } from "react"
import Login from "./Login"
import { Context } from "../store/AppContext"
import { Link } from "react-router-dom"
// import Popular from "./Popular"

const Home = () => {
    const { store, actions } = useContext(Context)
    return (
        <div className='row mt-5 pt-5 text-white'>
            
            {store.currentUser  === null ? 
                <div className="d-flex flex-column align-items-center">
                    <div className="display-3">
                        Welcome back to Futstarter
                    </div>
                    <Login />
                    
                    <Link to='register'>
                        <a href="#">Don't have an account?</a>
                    </Link>
                </div>
                :
                <div> Welcome</div>
            }


        </div>
    )
}

export default Home


