import {combineReducers} from 'redux';
import Userreducers from './userReducer';

export default combineReducers({
    user:Userreducers,
});