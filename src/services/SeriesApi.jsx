import axios from "axios";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchSeries = createAsyncThunk("api/fetchseries", 
  async () => {
  const response = await axios.get("https://www.episodate.com/api/most-popular?page=1");
   
  return response;
 
});