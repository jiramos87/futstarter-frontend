const env = process.env.NODE_ENV || 'development'
const baseUrl = env === 'development' ? 'http://localhost:5000' : 'http://herokuasdf.com'

const getUserSquadsAPI = async (user_token) => {
    const headers = {
        "Accept": "application/json",
        "Content-Type": "application/json",
        "Authorization": "Bearer " + user_token
    }
    let body_obj = {
        "user_token": user_token
    }

    let body = JSON.stringify(body_obj)
    
    try{
        let call = await fetch(`${baseUrl}/user/getusersquads`, {
            method: 'POST',
            headers,
            body
          })
          
          
          if(!call.ok) throw Error("There was a problem in the loading process")

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

export default getUserSquadsAPI