import {combineReducers} from 'redux';
import reducers from './reducer';

export default combineReducers({
    base:reducers,
});