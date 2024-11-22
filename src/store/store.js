import { configureStore } from "@reduxjs/toolkit";
import PeopleReducer from "./slices/peopleSlice";
import LocationsReducer from "./slices/locationsSlice";
import PersonReducer from "./slices/personSlice";
import singleLocationReducer from "./slices/singleLocationSlice";
import singleEpisodeReducer from "./slices/episodeSlice";

export default configureStore({
  reducer: {
    people: PeopleReducer,
    locations: LocationsReducer,
    person: PersonReducer,
    singleLocation: singleLocationReducer,
    episodes: singleEpisodeReducer,
  },
});
