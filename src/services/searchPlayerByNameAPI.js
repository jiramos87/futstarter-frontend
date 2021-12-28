const env = process.env.NODE_ENV || 'development'
const baseUrl = env === 'development' ? 'http://localhost:5000' : 'http://herokuasdf.com'

const searchPlayerByNameAPI = async (searchData) => {
    console.log('search data', searchData)
    
    let body = JSON.stringify(searchData)
    let headers = {
      'accept': 'application/json',
      'Content-Type': 'application/json'  
    }  
    console.log(body)

    try{
        let call = await fetch(`${baseUrl}/api/v1/players/search`, {
            method: 'POST',
            headers,
            body
          })
          
          if(!call.ok) {
            //throw Error("There was a problem in the search request")
            return {data: 'nothing', status: 400}
          }
          if(call.status === 401){
            throw Error("Invalid credentials, try reloading the page.")
          }
          else if(call.status === 400){
            throw Error("No players found")
        }
        return call.json()
    } catch (error){
        console.error(error)    
    }

}

export default searchPlayerByNameAPI