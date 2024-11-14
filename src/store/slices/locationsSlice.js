import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../utils";

export const fetchLocations = createAsyncThunk(
  "location/fetchLocation",
  async (url) => {
    const res = await fetchData(url);
    console.log(res);
    if (res) {
      return {
        results: res.results.map((location) => location),
        info: res.info,
      };
    } else {
      console.log("Error:we cant get data from this server");
    }
  }
);

const locationsSlice = createSlice({
  name: "locations",
  initialState: {
    data: {
      results: [],
      info: null,
    },
    type:'',
    dimension:''
  },
  reducers: {
    setType(state, action) {
      state.type = action.payload;
    },
    setDimension(state, action) {
      state.dimension = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLocations.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const {setType, setDimension } = locationsSlice.actions;
export default locationsSlice.reducer;
