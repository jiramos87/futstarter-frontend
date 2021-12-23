const env = process.env.NODE_ENV || 'development'
const baseUrl = env === 'development' ? 'http://localhost:5000' : 'http://herokuasdf.com'

const saveSquadAPI = async (squad_obj, user_token) => {
    console.log('squad_obj', squad_obj)
    const body = JSON.stringify(squad_obj) 
    try{
        let call = await fetch(`${baseUrl}/user/save`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${user_token}`
            },
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