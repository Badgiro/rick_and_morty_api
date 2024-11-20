import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../utils";
import { CHARACTERS } from "../../constants";

export const fetchPerson = createAsyncThunk(
  "person/fetchPerson",
  async (id, { rejectWithValue }) => {
    try {
      const res = await fetchData(`${CHARACTERS}/${id}/`);
      console.log(res)
      return {
        info: [
          { title: "Gender", data: res?.gender || "Unknown" },
          { title: "Status", data: res?.status || "Unknown" },
          { title: "Specie", data: res?.species || "Unknown" },
          { title: "Origin", data: res?.origin?.name || "Unknown" },
          { title: "Type", data: res?.type || "Unknown" },
          { title: "Location", data: res?.location?.name || "Unknown" },
        ],
        episodes: res?.episode || [],
        name: res?.name || "Unknown",
        photo: res?.image || "",
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const personSlice = createSlice({
  name: "person",
  initialState: {
    info: [],
    episodes: [],
    name: "",
    photo: "",
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPerson.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.info = [];
        state.episodes = [];
        state.name = "";
        state.photo = "";
      })
      .addCase(fetchPerson.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.info = action.payload.info;
        state.episodes = action.payload.episodes;
        state.name = action.payload.name;
        state.photo = action.payload.photo;
      })
      .addCase(fetchPerson.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default personSlice.reducer;
