import * as types from "./actionTypes"


const initialState = {
    appointments: [],
    appointment: {},
    loading: true
}


const appointmentReducers = (state = initialState, action) =>{
    switch(action.type){
        case types.GET_APPOINTMENTS:
            return {
                ...state,
                appointments: action.payload,
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


export default appointmentReducers;