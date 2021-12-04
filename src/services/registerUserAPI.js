
const env = process.env.NODE_ENV || 'development'
const baseUrl = env === 'development' ? 'http://localhost:5000/' : 'http://herokuasdf.com/'

const registerUserAPI = async (user) => {

    try{
        console.log(user)
        let call = await fetch(`${baseUrl}/api/v1/auth/register`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body: user,
            dataType: 'json',
            data: user
          })
          return call.json()
    } catch (error){
        console.error(error)    
    }

}

export default registerUserAPI