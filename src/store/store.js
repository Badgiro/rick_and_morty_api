import { configureStore } from "@reduxjs/toolkit";
import PeopleReducer from "./slices/peopleSlice";
import LocationsReducer from "./slices/locationsSlice"


export default configureStore({
  reducer: {
    people: PeopleReducer,
    locations: LocationsReducer
  },
});
