import { createSlice } from "@reduxjs/toolkit";
const initialState={
    fav:[],
};

export const favSlice=createSlice({
    name:"favourite",
    initialState,
    reducers:{
        addToFav:(state,action)=>{
            state.fav.push(action.payload)
        },
        removeItem:(state,action)=>{
            state.fav=state.fav.filter((item)=>item.id!==action.payload)
        }
        
    },
})

export const{addToFav,removeItem}=favSlice.actions;
export default favSlice.reducer;