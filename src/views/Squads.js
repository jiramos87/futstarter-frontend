import React, { useContext } from 'react'
import { Context } from '../store/AppContext'

const Squads = () => {
    const { store, actions } = useContext(Context)
    console.log(actions.getSquad().CAM.acceleration)
    return (
        <div className="text-white">
            {actions.getSquad().CAM.acceleration} 
            <br></br>
            {actions.getSquad().CAM.acceleration}
            <br></br>
            {actions.getSquad().CAM.acceleration}
            <br></br>
            {actions.getSquad().CAM.acceleration}
            <br></br>
            {actions.getSquad().CAM.acceleration}
            <br></br>
            {actions.getSquad().CAM.acceleration}
            {actions.getSquad().CAM.acceleration}
            {actions.getSquad().CAM.acceleration}
        </div>
    )
}

export default Squads