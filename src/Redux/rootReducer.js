import {combineReducers} from 'redux';
import detailReducer from './reducers/detailReducer';
import gamesReducer from './reducers/gamesReducer';


const reducer = combineReducers({
    games: gamesReducer,
    detail: detailReducer
})

export default reducer;