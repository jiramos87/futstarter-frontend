import React from "react"
import Popular from "./Popular"

const Home = () => {
    return (
        <div className="text-white mx-3 overflow-scroll">
            <div id="home">
                <div className="display-3 my-4 py-5">FUTBIN</div>
            </div>

            
            <div className="display-5 text-start py-2 mt-5 ms-4 mb-3">Popular</div>
            <Popular />
            
            

        </div>
    )
}

export default Home