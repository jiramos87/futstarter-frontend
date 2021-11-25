import React, { useContext } from 'react'
import { Context } from '../store/AppContext'

const Squads =() => {
    const { store, actions } = useContext(Context)
    console.log(actions.getSquad().CAM.acceleration)
    return (
        <div className="text-white mt-5 pt-5"> 
            {actions.getSquad().CAM.acceleration}
        </div>
    )
}

export default Squads