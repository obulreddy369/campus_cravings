import { createSlice } from "@reduxjs/toolkit";

const favSlice=createSlice({
    name: 'fav',
    initialState:{
        items:[],
    },
    reducers:{
        addFav:(state,action)=>{
            const newItem = action.payload;
            // ✅ Ensure the item has a unique id
            if (!newItem.id) {
                newItem.id = new Date().getTime().toString(); // Assign unique ID if missing
            }
            state.items.push(newItem);
        },
        removeFav: (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);  // ✅ Removes only the selected item
        },
        clearFav:(state)=>{
            state.items.length=0;
        },
    }
})


export const {addFav, removeFav,clearFav} =favSlice.actions;
export default favSlice.reducer;