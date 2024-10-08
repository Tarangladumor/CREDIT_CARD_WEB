import {combineReducers} from "@reduxjs/toolkit";
import cardSlice from "../slices/cardSlice";

const rootReducer  = combineReducers({
    card:cardSlice
})

export default rootReducer