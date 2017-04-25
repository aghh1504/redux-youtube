import { combineReducers } from "redux";


const videos = (state = [], action) => {
    switch (action.type) {
        case "VIDEOS_LOADED":
            return  action.payload;
        default:
            return state;
    }
};

 const value = (state={ value: ''}, action) => {
     switch (action.type) {
         case "VIDEOS_LOADED":
             let newState = Object.assign({}, state);
             newState.value = '';
             return newState
         case 'ADD_VIDEO':
             return {
                 ...state,
                 value: action.payload
             }
         default:
             return state;
     }
 }

const reducers = combineReducers({
    videos,
    value
});

export default reducers;
