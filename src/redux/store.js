import { combineReducers, createStore } from "redux";
import { favorites } from './reducers/favorites';

const rootReducer = combineReducers({
    parks: favorites,
});
const store = createStore(rootReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;