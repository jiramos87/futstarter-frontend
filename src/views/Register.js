import React, { useState, useContext } from 'react'
import { Context } from '../store/AppContext'


const Register = () => {
    const { store, actions } = useContext(Context)
    const [ formData, setFormData] = useState({
        username: '',
        email: '',
        password: ''
    })

    const onChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        console.log(formData)
        //validations on email regex and password length

        //registerUser on submit
        actions.registerUser(formData)

    }
    
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={onSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                        <div className="form-group">
                            <label htmlFor="username">User name</label>
                            <input type="text" className="form-control" name="username" placeholder="User name" value={formData.username} onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" placeholder="Email" value={formData.email} onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" placeholder="Password" value={formData.password} onChange={onChange}/>
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary btn-block"> Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register