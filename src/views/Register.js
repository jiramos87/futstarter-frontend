import React, { useContext } from 'react'
import { Context } from '../store/AppContext'


const Register = () => {
    const { store, actions } = useContext(Context)
    onSubmit = actions.onSubmit
    onChange = actions.onChange
    userName = store.userName
    email = store.email
    password = store.password

    return (
        <div className="container">
            <div className="row">
                <div className="col-md-6 mt-5 mx-auto">
                    <form noValidate onSubmit={onSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal">Register</h1>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input type="text" className="form-control" name="name" placeholder="Name" value={userName} onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" className="form-control" name="email" placeholder="Email" value={email} onChange={onChange}/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" className="form-control" name="password" placeholder="Password" value={password} onChange={onChange}/>
                        </div>
                        <button type="submit" className="btn btn-lg btn-primary btn-block"> Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Register