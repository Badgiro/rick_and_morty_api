import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {  fetchData } from "../../utils";

export const fetchPeople = createAsyncThunk(
  "people/fetchPeople",
  async (url) => {
    const res = await fetchData(url);
    console.log(res);
    if (res) {
      return {
        results: res.results.map(person=> person),
        info: res.info,
      };
    } else {
      console.log("Error:we cant get data from this server");
    }
  }
);


const peopleSlice = createSlice({
  name: "people",
  initialState: {
    data: [],
   
  },

  reducers: {

  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.data = action.payload;
      })
   
  },
});

export const { addPeople } = peopleSlice.actions;
export default peopleSlice.reducer;
