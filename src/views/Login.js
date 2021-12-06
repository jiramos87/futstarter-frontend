import React, { useState, useContext } from 'react'
import { Context } from '../store/AppContext'


const Login = () => {
    const { store, actions } = useContext(Context)
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

        //registerUser on submit
        actions.loginUser(loginFormData)

    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
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
                        <button type="submit" className="btn btn-lg btn-primary btn-block">Login</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Login