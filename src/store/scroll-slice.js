import { createSlice } from "@reduxjs/toolkit";

const scrollSlice = createSlice({
    name: 'scrollRef',
    initialState: {
        images: []
    },
    reducers: {
        addImageToImages(state, action) {
            const newItem = action.payload;
            state.images = newItem;
        },
    }
});
export const scrollActions = scrollSlice.actions;
export default scrollSlice;