import * as types from "./actionTypes"


const initialState = {
    users: [],
    user: {},
    loading: true
}

const usersReducers = (state = initialState, action) =>{
    switch(action.type){
        case types.GET_USERS:
            return {
                ...state,
                users: action.payload,
                loading: false 
            }
            case types.LOGIN_USER:
                return {
                    ...state,
                    user: action.payload,
                    loading: false
                }
            case types.LOGOUT_USER:
                return {
                    ...state,
                    user: action.payload,
                    loading: false
                }
            case types.SET_APPOINTMENTS:
                return {
                    ...state,
                    user: action.payload,
                    loading: false
                }
            case types.DELETE_USERS:
                return {
                    ...state,
                    loading : false
                }
        default:
            return state;
    }
};


export default usersReducers;