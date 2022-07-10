import { combineReducers } from "@reduxjs/toolkit";
import exampleReducer from "./reducers/example-reducer";


const rootReducer = combineReducers({
    example: exampleReducer
});

export default rootReducer;