import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../utils";

export const fetchEpisode = createAsyncThunk(
  "episode/fetchEpisode",
  async (url) => {
    const res = await fetchData(url);
    console.log(res);
    if (res) {
      return {
        results: res.results.map((episode) => episode),
        info: res.info,
      };
    } else {
      console.log("Error:we cant get data from this server");
    }
  }
);

const episodeSlice = createSlice({
  name: "episodes",
  initialState: {
    data: {
      results: [],
      info: null,
    },
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEpisode.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export default episodeSlice.reducer;
