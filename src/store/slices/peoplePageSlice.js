import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchData } from '../../utils';
import { characters } from '../../constants';

export const fetchPeople = createAsyncThunk('people/fetchPeople', async () => {
  const res = await fetchData(characters);
  console.log(res)
  if (res) {
    return res.results.map(({ id, image, name, species }) => ({
      id,
      image,
      name,
      species,
    }));
  }
});

const peoplePageSlice = createSlice({
  name: 'People',
  initialState: {
    data: [],
  },
  reducers: {
    addPeople(state, action) {
   
      state.data = [...action.payload.people];
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      state.data = action.payload;
    });
  },
});

export const { addPeople } = peoplePageSlice.actions;
export default peoplePageSlice.reducer;