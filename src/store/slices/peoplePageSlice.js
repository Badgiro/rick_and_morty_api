import {createSlice} from '@reduxjs/toolkit'


const peoplePageSlice = createSlice({
    name:"People",
    initialState:{
       data:[],
    },

    reducers: {
       addPeople(state, action){
       state.data = [...state.data, ...action.payload.people]
       }

    }   
})


export const{addPeople} = peoplePageSlice.actions
export default peoplePageSlice.reducer