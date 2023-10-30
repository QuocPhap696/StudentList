import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "./studentSlice";
// import filterSlice from './filterSlice'
// import customerReducer from './customerSlice';

// const store = configureStore({
//     reducer: {
//         student: studentSlice.reducer,
//         filters: filtersSlice.reducer,
//     },
// });
// export default store

export default configureStore({
    reducer: { 
        student: studentSlice,
    },
});