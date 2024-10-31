import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../utils";
import { LOCATIONS } from "../../constants";

export const fetchLocations = createAsyncThunk(
  "location/fetchLocation",
  async () => {
    const res = await fetchData(LOCATIONS);
    if (res) {
      return {
        results: res.results,
        info: res.info,
      };
    } else {
      console.log("Error:we cant get data from this server");
    }
  }
);

const locationsSlice = createSlice({
  name: "Locations",
  initialState: {
    data: [],
  },
  reducers: {
    addLocations(state, action) {
      state.data = [...action.payload.locations];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLocations.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { addLocations } = locationsSlice.actions;
export default locationsSlice.reducer;
