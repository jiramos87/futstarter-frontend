import React, { useState, useContext } from 'react'
import { Context } from '../store/AppContext'
import { Link, useHistory } from 'react-router-dom'
import './Login.css';


const Login = () => {
    const { store, actions } = useContext(Context)
    const history = useHistory()

    const [ loginFormData, setFormData] = useState({
        username: '',
        password: ''
    })

    const onChange = (e) => {
        setFormData({
            ...loginFormData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(loginFormData)
        //validations on email regex and password length

        //loginUser on submit
        actions.loginUser(loginFormData, history)

    }
    
    return (
        <div className="background">
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-9 mx-auto mt-5 pt-5">
                        {store.currentUser  === null ? 
                            <div>
                                <div className='d-flex flex-row'>
                                    <div className='h3 fst-italic w-50 welcome-text'>
                                        Welcome to Futstarter, a place to build your FIFA FUT starter teams
                                        and get recommendations from our original <div onClick={() => history.push('algorithm')}><a href="#">meta-stat based player ranking algorithm.</a></div>
                                    </div>
                                    <div id="carouselExampleCaptions" className="carousel slide w-50 home-carousel border border-white rounded" data-bs-ride="carousel">
                                        
                                        <div className="carousel-inner">
                                            <div className="carousel-item active cursor-pointer" onClick={() => history.push('/squads')} data-bs-interval="3000">
                                                <img src={"http://localhost:5000/api/v1/static/images/system/squadselector.png"} className="d-block w-100 carousel-image rounded" alt="..."/>
                                                <div className="carousel-caption d-none d-md-block position-absolute start-50 translate-middle mt-5 pt-5">
                                                    <div className='carousel-text rounded-pill bg-dark px-0 mt-3'>Meta squads</div>
                                                </div>
                                            </div>
                                            <div className="carousel-item cursor-pointer" onClick={() => history.push('/players')} data-bs-interval="3000">
                                                <img src={"http://localhost:5000/api/v1/static/images/system/playerrankings.png"} className="d-block w-100 carousel-image rounded" alt="..."/>
                                                <div className="carousel-caption d-none d-md-block position-absolute start-50 translate-middle mt-5 pt-5">
                                                    <div className='carousel-text rounded-pill bg-dark px-0 mt-3'>Meta players</div>
                                                </div>
                                            </div>
                                            <div className="carousel-item cursor-pointer" onClick={() => history.push('/squadcreator')} data-bs-interval="3000">
                                                <img src={"http://localhost:5000/api/v1/static/images/system/squadcreator.png"} className="d-block w-100 carousel-image rounded" alt="..."/>
                                                <div className="carousel-caption d-none d-md-block position-absolute start-50 translate-middle mt-5 pt-5">
                                                <div className='carousel-text rounded-pill bg-dark px-0 mt-3'>Squad creator</div>
                                                </div>
                                            </div>
                                            <div className="carousel-item cursor-pointer" onClick={() => history.push('/usersquads')} data-bs-interval="3000">
                                                <img src={"http://localhost:5000/api/v1/static/images/system/usersquads.png"} className="d-block w-100 carousel-image rounded" alt="..."/>
                                                <div className="carousel-caption d-none d-md-block position-absolute start-50 translate-middle mt-5 pt-5">
                                                <div className='carousel-text rounded-pill bg-dark px-0 mt-3'>Your squads</div>
                                                </div>
                                            </div>
                                        </div>
                                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Previous</span>
                                        </button>
                                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                            <span className="visually-hidden">Next</span>
                                        </button>
                                    </div>
                                </div>

                                <div className="d-flex flex-column justify-content-center align-items-center mt-2 pt-5">
                                    <form noValidate onSubmit={onSubmit}>
                                        <h1 className="h3 mb-3 mt-5 font-weight-normal">Login</h1>
                                        <div className="form-group">
                                            <label htmlFor="username">User name</label>
                                            <input type="text" className="form-control w-100" name="username" placeholder="User name" value={loginFormData.username} onChange={onChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control w-100" name="password" placeholder="Password" value={loginFormData.password} onChange={onChange}/>
                                        </div>
                                        { store.invalidCredentials ? 
                                            <div className=' text-center bg-danger rounded mt-2 mb-2'>
                                                "Username or password incorrect"   
                                            </div>
                                            :
                                            ''
                                        }
                                        <button type="submit" className="btn btnLogin btn-lg btn-primary btn-block">Login</button>
                                    </form>
                                    <div>
                                        <span>Don't have an account? </span>
                                        <Link to='/register'>
                                            <a className="bg-dark rounded" href="#">Go to the Register page</a>
                                        </Link>
                                    </div>
                                    
                                </div>
                            </div>
                            :
                            history.push('/home')
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login