const getState = ({ getStore, getActions, setStore }) => {
    const backendUrl = 'http://192.168.1.11:5000'
    const apiKey = '97c4dd2b-fe2e-4407-8ea3-f26435d6ce9b'
    return {
        store: {
            
            pl_players: [],
            playersPage: 1,
            playersCount: [],   
            playersCountTotal: [],
            totalPlayerPages: [],
            leagues: [],
            leaguesPage: 1,
            leaguesCount: [],   
            leaguesCountTotal: [],
            totalLeaguesPages: [],
            clubs: [],
            clubsPage: 1,
            clubsCount: [],   
            clubsCountTotal: [],
            totalClubsPages: [],
            nations: [],
            nationsPage: 1,
            nationsCount: [],   
            nationsCountTotal: [],
            totalNationsPages: [],
            rarities: [],
            raritiesPage: 1,
            raritiesCount: [],   
            raritiesCountTotal: [],
            totalRaritiesPages: [],
            users: [],

        },
        actions: {
            
            searchPLPlayers: () => {
                
                fetch(`${backendUrl}/players`)
                .then(data => data.json())
                .then(res => setStore({ 
                    pl_players: getStore().pl_players.concat(res.items)}))
                
            },

            addToFavorites: (name, url) => {
                let newObj = { name: name, url: url}
                setStore({favorites: getStore().favorites.concat(newObj)})
                console.log(getStore().favorites)
            },
            deleteFromFavorites: (name) => {
                let newObj = getStore().favorites.filter( (fav) => fav.name !== name)
                setStore({favorites: newObj})
            }

        }
    };
};

export default getState;