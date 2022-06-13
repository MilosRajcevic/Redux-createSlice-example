import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import authenticationSlice from "./auth";

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: authenticationSlice.reducer,
  },
});

export default store;
