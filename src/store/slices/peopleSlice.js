import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../utils";

export const fetchPeople = createAsyncThunk(
  "people/fetchPeople",
  async (url) => {
    const res = await fetchData(url);
    console.log(res);
    if (res) {
      return {
        results: res.results.map((person) => person),
        info: res.info,
      };
    } else {
      console.log("Error: Unable to retrieve data from server");
    }
  }
);

const peopleSlice = createSlice({
  name: "people",
  initialState: {
    data: {
      results: [],
      info: null,
    },
    status: "", 
  },

  reducers: {
    setStatus(state, action) {
      state.status = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { setStatus } = peopleSlice.actions;
export default peopleSlice.reducer;