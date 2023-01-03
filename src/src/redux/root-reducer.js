import { combineReducers } from "redux";    
import appointmentReducers from "./appointmentReducer";
import centersReducers from "./centerReducer";
import usersReducers from "./userReducer";
import vaccineReducers from "./vaccineReducer";

const rootReducer = combineReducers({
    users: usersReducers,
    centers: centersReducers,
    appointments: appointmentReducers,
    vaccines: vaccineReducers
});

export default rootReducer;