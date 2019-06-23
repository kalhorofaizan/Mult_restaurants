import {add} from '../actionType'

const  initialingState={number:0};
export default function (state=initialingState,action) {
    switch (action.type) {
        case add:
            return {number:2+state.number};
        default:
        return state;
    }
}