import React, { useContext, useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Context } from '../store/AppContext'


const UserSquads = () => {
    const { store, actions } = useContext(Context)
    let token = store.token
    useEffect(() => {
        actions.getUserSquads(token)
    }, [])
    let user_squads = store.squads_data !== [] ? store.squads_data : [] 
    console.log('user squads[0]:',  user_squads[0]) 



    const [ userSquads, setUserSquads ] = useState(user_squads)
  
    const history = useHistory()
    
    let squads = user_squads.map((squad, key) => {
        console.log(squad.squad_name, squad.formation)
        return (
            
            <tr className="border-bottom cursor-pointer py-2 px-2" onClick={() => actions.setSquadCreatorSquad(squad, history)}>
                <td>{key + 1}</td>
                <td>{squad.squad_name}</td>
                <td>{squad.formation}</td>  
            </tr>
            
        )
    }) 
    return (
        <div className='position-absolute w-75 d-flex flex-row mt-5'>
            <table className="table table-hover table-dark table-striped table-bordered mt-4 rounded">
                        <thead>
                            <tr>
                                <th width="3%" scope="col"><small>ID</small></th>
                                <th width="20%" scope="col">Squad Name</th>
                                <th width="5%" scope="col">Formation</th>
                            </tr>
                        </thead>
                        <tbody>
                            {squads}  
                        </tbody>    
            </table>
        </div>
    )
}

export default UserSquads