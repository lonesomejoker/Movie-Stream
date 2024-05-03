import {createSlice} from "@reduxjs/toolkit";
import { fetchSeries } from "../services/SeriesApi";
const initialState = {
    series: [],
    loading: false,
    error: null,
  };
  

const allSeriesData=createSlice({
    name: "allseries",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchSeries.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(fetchSeries.fulfilled, (state, action) => {
          state.loading = false;
          state.series = action.payload;
        })
        .addCase(fetchSeries.rejected, (state, action) => {
          state.loading = false;
          state.error = action.error.message;
        });
    },
    
        
       
});
export default allSeriesData.reducer;