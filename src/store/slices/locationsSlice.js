import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../utils";


export const fetchLocations = createAsyncThunk(
  "location/fetchLocation",
  async (url) => {
    const res = await fetchData(url);
    console.log(res)
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
export const fetchMultipleLocations = createAsyncThunk( 'locations/fetchMultipleLocations',
  async (url) => {
    const locationsPerPage = await fetch(url)
    const data = await locationsPerPage.json()
   
    return data
  }
)

const locationsSlice = createSlice({
  name: "Locations",
  initialState: {
    data: [],
    multipleLocations:[],
  },
  reducers: {
    addLocations(state, action) {
      state.data = [...action.payload.locations];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchLocations.fulfilled, (state, action) => {
      state.data = action.payload;
    }).addCase(fetchMultipleLocations.fulfilled, (state, action) => {
      state.multipleLocations = action.payload
    });
  },
});

export const { addLocations } = locationsSlice.actions;
export default locationsSlice.reducer;
