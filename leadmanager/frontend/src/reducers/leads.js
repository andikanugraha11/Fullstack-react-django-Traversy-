import {GET_LEAD} from "../actions/types.js";

const initialState = {
    leads : []
}

export default function(state = initialState, action){
    switch(action.type){
        case GET_LEAD:
            return{
                ...state,
                leads : action.payload
            };
        default:
            return state;
    }
}