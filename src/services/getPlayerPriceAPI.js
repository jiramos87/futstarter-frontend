const env = process.env.NODE_ENV || 'development'
const baseUrl = env === 'development' ? 'http://localhost:5000' : 'http://herokuasdf.com'

const getPlayerPriceAPI = async (global_id) => {
    const body = JSON.stringify(global_id) 
    try{
        console.log(global_id)
        let call = await fetch(`${baseUrl}/playerprice`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            },
            body
          })
          
          return call.json()
    } catch (error){
        console.error(error)    
    }

}

export default getPlayerPriceAPI