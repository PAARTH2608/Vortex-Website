import { configureStore } from "@reduxjs/toolkit";
import scrollSlice from './scroll-slice';

const store = configureStore({
    reducer: { scroll:scrollSlice.reducer }
}); 
export default store; 