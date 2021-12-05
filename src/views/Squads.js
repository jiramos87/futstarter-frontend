import React, { useContext, useState, useEffect } from 'react'
import { Context } from '../store/AppContext'
import {getSquad} from '../store/flux'


const Squads =() => {
    const { store, actions } = useContext(Context)
    const [ squad, setSquad] = useState([])
    useEffect( ()=>{
        setSquad(actions.getSquad())
    }, [])

    
    console.log(squad?.CAM?.acceleration)
    return (
        <h2>Meta Squads</h2>
        )
}

export default Squads