import * as types from "./actionTypes"


const initialState = {
    centers: [],
    centerSelect: {},
    loading: true
}

const centersReducers = (state = initialState, action) =>{
    switch(action.type){
        case types.GET_CENTERS:
            return {
                ...state,
                centers: action.payload,
                loading: false
            }
            case types.DELETE_CENTERS:
                return {
                    ...state,
                    loading : false
                }
            case types.ADD_CENTERS:
                return {
                    ...state,
                    loading: false
                }
            case types.GET_CENTER:
                return {
                    ...state,
                    centerSelect: action.payload
                }
        default:
            return state;
    }
};


export default centersReducers;