import React, { useContext } from "react"
import Login from "./Login"
import { Context } from "../store/AppContext"
import { Link, useHistory } from "react-router-dom"
// import Popular from "./Popular"

const Home = () => {
    const { store, actions } = useContext(Context)
    const history = useHistory()
    return (
        <div className="background">
            <div className="container">
                <div className="row">
                    <div>
                        {store.currentUser  === null ? 
                            <div className="d-flex flex-column mx-auto">
                                
                                <Login />
                                
                            </div>
                            :
                            <div className="d-flex flex-column align-items-center">
                                <div className="h2 mb-5 mt-3 text-center "> Welcome to Fustarter, {store.currentUser?.username}. Check out our fifa 22 squad building solutions.</div>
                                <div className="row w-75 
                                row-cols-1 row-cols-md-2 g-4">
                                    <div className="col">
                                        <div onClick={() => history.push('/squads')} className="card home-card d-flex flex-column align-items-center cursor-pointer">
                                            <img src={"http://localhost:5000/api/v1/static/images/system/squadselector.png"} className="card-img-top " alt="..."/>
                                            <div className="card-body">
                                                <h3 className="card-title text-center">Meta Squad Selector</h3>
                                                <p className="card-text">Know the best meta-squad for each of the five most important leagues in the game with our original interactive tool. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div onClick={() => history.push('/players')}className="card home-card d-flex flex-column align-items-center cursor-pointer">
                                            <img src={"http://localhost:5000/api/v1/static/images/system/playerrankings.png"} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h3 className="card-title text-center">Meta Players Rankings</h3>
                                                <p className="card-text">See our player rankings for every position, based on our original meta-calculation algorithm. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div onClick={() => history.push('/squadcreator')} className="card home-card d-flex flex-column align-items-center cursor-pointer">
                                            <img src={"http://localhost:5000/api/v1/static/images/system/squadcreator.png"} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h3 className="card-title text-center">Squad creator</h3>
                                                <p className="card-text">Create and build squads by searching players in our database</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div onClick={() => history.push('/usersquads')} className="card home-card d-flex flex-column align-items-center cursor-pointer">
                                            <img src={"http://localhost:5000/api/v1/static/images/system/usersquads.png"} className="card-img-top" alt="..."/>
                                            <div className="card-body">
                                                <h3 className="card-title text-center">User squads</h3>
                                                <p className="card-text">Organize and load your saved squads</p>
                                            </div>
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

export default Home


