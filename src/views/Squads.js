import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/AppContext'

const Squads =() => {
    const { store, actions } = useContext(Context)
    const [ squad, setSquad] = useState([])
    useEffect( () =>{
        setSquad(actions.getSquad())
    }, [])

    
    console.log(squad?.CAM?.acceleration)
    return (
        <div className="text-black mt-5 pt-5"> 
            {squad?.CAM?.acceleration}
            <br/>
            {squad?.CAM?.acceleration}
            <br/>
        </div>
    )
}

export default Squads