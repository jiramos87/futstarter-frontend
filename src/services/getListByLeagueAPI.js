const env = process.env.NODE_ENV || 'development'
const baseUrl = env === 'development' ? 'http://localhost:5000' : 'http://herokuasdf.com'

const getListByLeagueAPI = async (league, position) => {
    try{
        console.log(league, position)
        let call = await fetch(`${baseUrl}/api/v1/players/leagues/${league}/${position}`, {
            method: 'GET'
        })
        
        return call.json()
    } catch (error){
        console.error(error)    
    }

}

export default getListByLeagueAPI