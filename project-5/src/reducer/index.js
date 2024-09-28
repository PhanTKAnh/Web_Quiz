import { combineReducers } from 'redux';
import loginReducer from './login';



const allReducer = combineReducers({
    loginReducer,
    // them nhieu reducer o day
});


export default allReducer