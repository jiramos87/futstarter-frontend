const env = process.env.NODE_ENV || 'development'
const baseUrl = env === 'development' ? 'http://localhost:5000' : 'http://herokuasdf.com'

const getPlayerByIDAPI = async (id) => {
    try{
        let call = await fetch(`${baseUrl}/api/v1/players/${id}`, {
            method: 'GET'
        })
        
        return call.json()
    } catch (error){
        console.error(error)    
    }

}

export default getPlayerByIDAPI