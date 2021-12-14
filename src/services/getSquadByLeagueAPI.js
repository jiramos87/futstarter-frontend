const env = process.env.NODE_ENV || 'development'
const baseUrl = env === 'development' ? 'http://localhost:5000' : 'http://herokuasdf.com'

const getSquadByLeagueAPI = async (league) => {
    try{
        let call = await fetch(`${baseUrl}/api/v1/squads/leagues/${league}`, {
            method: 'GET'
          })
          
          return call.json()
    } catch (error){
        console.error(error)    
    }

}

export default getSquadByLeagueAPI