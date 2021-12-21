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
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        {store.currentUser  === null ? 
                            <div className="d-flex flex-column">
                                <form noValidate onSubmit={onSubmit}>
                                    <h1 className="h3 mb-3 font-weight-normal">Login</h1>
                                    <div className="form-group">
                                        <label htmlFor="username">User name</label>
                                        <input type="text" className="form-control" name="username" placeholder="User name" value={loginFormData.username} onChange={onChange}/>
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <input type="password" className="form-control" name="password" placeholder="Password" value={loginFormData.password} onChange={onChange}/>
                                    </div>
                                    { store.invalidCredentials ? 
                                        <div className=' text-center bg-danger rounded mt-2 mb-2'>
                                            "Username or password incorrect"   
                                        </div>
                                        :
                                        ''
                                    }
                                    <button type="submit" className="btn btn-lg btn-primary btn-block">Login</button>
                                </form>
                                <div>
                                    <span>Don't have an account? </span>
                                    <Link to='/register'>
                                        <a className="bg-dark rounded" href="#">Go to the Register page</a>
                                    </Link>
                                </div>
                                
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

export default Login