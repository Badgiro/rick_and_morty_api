import { configureStore } from "@reduxjs/toolkit";
import PeopleReducer from "./slices/peoplePageSlice";

export default configureStore({
  reducer: {
    people: PeopleReducer,
  },
});
