import { right } from '@popperjs/core';
import React from 'react'

const FormRegister = () => {
    return (
        <div className="form-content-right">
            <form className="form">
                <h1>Create new account</h1>
                <div className="form-inputs">
                    <label htmlFor="username" className="form-label">
                           </label>

                        <input
                            type="text"
                            name="username"
                            className="form-input"
                            placeholder="Enter your username"
                        />
                </div>
                <div className="form-inputs">
                    <label htmlFor="email" className="form-label">
                        <input
                            type="email"
                            name="email"
                            className="form-input"
                            placeholder="Enter your email"
                        />
                    </label>
                </div>

            </form>
        </div>
    );
};

export default FormRegister;