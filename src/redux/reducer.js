import filtersReducer from "./filterSlice"

import { combineReducers } from "@reduxjs/toolkit"
const rootReducer = combineReducers({
    filters: filtersReducer
})
export default rootReducer;
