import * as types from "./actionTypes"


const initialState = {
    vaccines: [],
    vaccine: {},
    loading: true
}


const vaccineReducers = (state = initialState, action) =>{
    switch(action.type){
        case types.GET_VACCINES:
            return {
                ...state,
                vaccines: action.payload,
                loading: false 
            }
           case types.ADD_VACCINE:
               return{
                   ...state,
                   vaccines: action.payload,
                   loading: false
               }
            
        default:
            return state;
    }
};


export default vaccineReducers;