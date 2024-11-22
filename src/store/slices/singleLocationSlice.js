import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../../utils";
import { LOCATIONS } from "../../constants";

export const fetchSingleLocation = createAsyncThunk(
  "singleLocation/fetchSingleLocation",
  async (id, { rejectWithValue }) => {
    try {
      // Запрос данных локации
      const res = await fetchData(`${LOCATIONS}/${id}/`);
      console.log(res);

      // Запрос данных резидентов
      const residents = await Promise.all(
        res?.residents.map(async (residentUrl) => {
          const resident = await fetchData(residentUrl);
          return {
            name: resident.name,
            photo: resident.image,
            species: resident.species,
          };
        })
      );

      return {
        info: [
          { title: "Type", data: res?.type || "Unknown" },
          { title: "Dimension", data: res?.dimension || "Unknown" },
        ],
        name: res?.name || "Unknown",
        residents: residents, // Полностью загруженные данные резидентов
      };
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const singleLocationSlice = createSlice({
  name: "singleLocation",
  initialState: {
    info: [],
    residents: [],
    name: "",
    status: "idle",
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleLocation.pending, (state) => {
        state.status = "loading";
        state.error = null;
        state.info = [];
        state.name = "";
        state.residents = [];
      })
      .addCase(fetchSingleLocation.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.info = action.payload.info;
        state.name = action.payload.name;
        state.residents = action.payload.residents;
      })
      .addCase(fetchSingleLocation.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.payload;
      });
  },
});

export default singleLocationSlice.reducer;
