import {createStore} from 'redux';
import reducer from './reducers/index';

const initialstate={};
const store=createStore(reducer,initialstate);

export default store;