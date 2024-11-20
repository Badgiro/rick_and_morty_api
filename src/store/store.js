import { configureStore } from "@reduxjs/toolkit";
import PeopleReducer from "./slices/peopleSlice";
import LocationsReducer from "./slices/locationsSlice";
import PersonReducer from "./slices/personSlice";
import singleLocationReducer from "./slices/singleLocationSlice";

export default configureStore({
  reducer: {
    people: PeopleReducer,
    locations: LocationsReducer,
    person: PersonReducer,
    singleLocation: singleLocationReducer,
  },
});
