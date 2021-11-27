import React, { useContext } from 'react'
import { Context } from '../store/AppContext'

const Main = () => {
    const { store, actions } = useContext(Context)
    return (
        <main className="col ps-md-2 pt-2 mt-0 pt-0">
              <nav className="navbar navbar-light bg-black mt-0 top-0 position-relative">
                <div className="container-fluid d-flex flex-column mb-2">
                  <div className="d-flex flex-row w-100 justify-content-between">
                    
                      <a href="#" data-bs-target="#sidebar" data-bs-toggle="collapse" className="border rounded-3 p-1 text-decoration-none">Menu</a>
                      <h3 className="text-white"> Home </h3>
                      <button id="filters">X</button>
                  
                  </div>
                </div>
                <input className="form-control align-self-center me-2" type="search" placeholder="Search" aria-label="Search" />
              </nav>
            </main>
    )
}

export default Main