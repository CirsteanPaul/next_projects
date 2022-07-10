import { applyMiddleware, configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import rootReducer from "./root-reducer";
import { composeWithDevTools } from 'redux-devtools-extension';


const store = configureStore({
    reducer: rootReducer,
    devTools: process.env.NODE_ENV !== 'production',
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDisptach = typeof store.dispatch;

export const useAppDispatch = (): AppDisptach => useDispatch<AppDisptach>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;