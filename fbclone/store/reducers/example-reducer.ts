import { createReducer } from "@reduxjs/toolkit";
import { setLoading } from "../actions/example-actions";

interface State {
    state: boolean;
    loading: boolean;
}
const initialState: State = {
    state: false,
    loading: false,
}
const exampleReducer = createReducer(initialState, builder =>{
    builder
        .addCase(setLoading, (state, action) => ({ ...state, loading: action.payload}))
});

export default exampleReducer;