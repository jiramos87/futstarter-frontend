import React, { useState, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Context } from '../store/AppContext'


const Register = () => {
    const { store, actions } = useContext(Context)
    const [ registerFormData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const onChange = (e) => {
        setFormData({
            ...registerFormData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(registerFormData)
        //validations on email regex and password length

        //registerUser on submit
        actions.registerUser(registerFormData)

    }
    
    return (
        <div className="background">
            <div className="container">
                <div className="row">
                    <div className="col-md-6 mx-auto">
                        {store.currentUser  === null ?
                                <div className="d-flex flex-column">
                                    <form noValidate onSubmit={onSubmit}>
                                        <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                                        <div className="form-group">
                                            <label htmlFor="username">User name</label>
                                            <input type="text" className="form-control" name="username" placeholder="User name" value={registerFormData.username} onChange={onChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input type="email" className="form-control" name="email" placeholder="Email" value={registerFormData.email} onChange={onChange}/>
                                        </div>
                                        <div className="form-group">
                                            <label htmlFor="password">Password</label>
                                            <input type="password" className="form-control" name="password" placeholder="Password" value={registerFormData.password} onChange={onChange}/>
                                        </div>
                                        <button type="submit" className="btn btn-lg btn-primary btn-block"> Register</button>
                                    </form>
                                    <Link to='/'>
                                        <a href="#">Already have an account?</a>
                                    </Link>
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

export default Register