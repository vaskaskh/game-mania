import axios from 'axios';
import {popularGamesURL, upcomingGamesURL, newGamesURL, searchGameURL} from '../../../src/api';


export const loadGames = ()=>async(dispatch)=>{
    const popularData = await axios.get(popularGamesURL());
    const upcomingData = await axios.get(upcomingGamesURL());
    const  newData = await axios.get(newGamesURL());


    dispatch({
        type: "FETCH_GAMES",
        payload:{
            popular:popularData.data.results,
            upcoming: upcomingData.data.results,
            newGames: newData.data.results,
        },
    })
}

export const fetchSearch = (game_name)=>async(dispatch)=>{
    const searchGames = axios.get(searchGameURL(game_name));

    dispatch({
        type: "FETCH_SEARCHED",
        payload:{
            searched: (await searchGames).data.results,
        }
    })
}

export const clearSearched = ()=>{
    return{
        type: "CLEAR_SEARCHED"
    }
};
