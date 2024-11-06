import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { changeHTTP, fetchData } from '../../utils'

export const fetchPeople = createAsyncThunk(
  'people/fetchPeople',
  async (url) => {
    const replaceHTTP = changeHTTP(url)
    const res = await fetchData(replaceHTTP)
    console.log(res)
    if (res) {
      return {
        results: res.results.map(({ id, image, name, species }) => ({
          id,
          image,
          name,
          species,
        })),
        info: res.info,
      }
    } else {
      console.log('Error:we cant get data from this server')
    }
  }
)
export const fetchMultipleCharacters = createAsyncThunk( 'people/fetchMultipleCharacters',
  async (url) => {
    const charsPerPage = await fetch(url)
    const data = await charsPerPage.json()
    console.log(data)
   
    return data
  }
)

const peopleSlice = createSlice({
  name: 'people',
  initialState: {
    data: [],
    multipleCharacters: []
  },
  
  reducers: {
    addPeople(state, action) {
      state.data = [...action.payload.people]
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPeople.fulfilled, (state, action) => {
      state.data = action.payload
    }).addCase(fetchMultipleCharacters.fulfilled, (state, action) => {
      state.multipleCharacters = action.payload
    })
  },
})

export const { addPeople } = peopleSlice.actions
export default peopleSlice.reducer
