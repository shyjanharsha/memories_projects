// Reducer is a function and its accept argument as state and action And the block check the action type
import {CREATE_POST,
    UPDATE_POST,
    DELETE_POST,
    FETCH_ALL_POST, 
    LIKE_POST} from '../constants/actionType'


const postReducers =  (state = [], action) => {
    switch (action.type) {
        case "FETCH_ALL_POST":
            console.log(action , "FFFFFFFFFFFFFFF")
            return action.payload;
        case "CREATE_POST":
            return [...state, action.payload];
        case "UPDATE_POST":
            console.log(action, "SSSSSSSSSSSSSSS")
            return state.map((post) => post._id == action.payload._id ? action.payload : post);
        case "LIKE_POST":
            console.log(state, "rrrrrrrrrrrrrrrrrrrrrrrrr", state ==  action.payload._id)
            return state.map((post) => post._id === action.payload._id ? action.payload : post);
        case "DELETE_POST":
            return state.filter((post) => post._id != action.payload)
        default:
            return state;
    }
}

export default postReducers