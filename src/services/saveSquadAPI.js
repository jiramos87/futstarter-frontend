const env = process.env.NODE_ENV || 'development'
const baseUrl = env === 'development' ? 'http://localhost:5000' : 'http://herokuasdf.com'

const saveSquadAPI = async (squad_obj, user_token) => {
    let squad = [
        squad_obj.squad_data[0].player_data != null ? squad_obj.squad_data[0].player_data.global_id : 0,
        squad_obj.squad_data[1].player_data != null ? squad_obj.squad_data[1].player_data.global_id : 0,
        squad_obj.squad_data[2].player_data != null ? squad_obj.squad_data[2].player_data.global_id : 0,
        squad_obj.squad_data[3].player_data != null ? squad_obj.squad_data[3].player_data.global_id : 0,
        squad_obj.squad_data[4].player_data != null ? squad_obj.squad_data[4].player_data.global_id : 0,
        squad_obj.squad_data[5].player_data != null ? squad_obj.squad_data[5].player_data.global_id : 0,
        squad_obj.squad_data[6].player_data != null ? squad_obj.squad_data[6].player_data.global_id : 0,
        squad_obj.squad_data[7].player_data != null ? squad_obj.squad_data[7].player_data.global_id : 0,
        squad_obj.squad_data[8].player_data != null ? squad_obj.squad_data[8].player_data.global_id : 0,
        squad_obj.squad_data[9].player_data != null ? squad_obj.squad_data[9].player_data.global_id : 0,
        squad_obj.squad_data[10].player_data != null ? squad_obj.squad_data[10].player_data.global_id : 0
    ]
    squad_obj.squad_data = squad
    console.log(squad_obj)
    const body = JSON.stringify(squad_obj) 
    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + user_token
    }
    console.log(headers)
    try{
        let call = await fetch(`${baseUrl}/user/savesquad`, {
            method: 'POST',
            headers,
            body
          })
          
          
          if(!call.ok) throw Error("There was a problem in the save process")

          if(call.status === 401){
            throw("Invalid credentials")
          }
          else if(call.status === 400){
            throw ("Invalid email or password format")
        }
        return call.json()
    } catch (error){
        console.error(error)    
    }

}

export default saveSquadAPI