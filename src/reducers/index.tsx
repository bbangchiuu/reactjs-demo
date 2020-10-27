import counterReduce from './counter';
import counterReducer from './counter';
import {combineReducers} from 'redux';
import loggedReducer from './isLogged';


const allReducers = combineReducers({
    counter: counterReducer,
    isLogged: loggedReducer
});

export default allReducers;