import { createSlice, configureStore } from "@reduxjs/toolkit";

const initialCounterState = { counter: 0, showCounter: true };
const initialAuthenticationState = { isAuthenticated: false };

const counterSlice = createSlice({
  name: "counter",
  initialState: initialCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

const authenticationSlice = createSlice({
  name: "authentication",
  initialState: initialAuthenticationState,
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    },
  },
});

export const counterActions = counterSlice.actions;
export const authenticationActions = authenticationSlice.actions;

const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
    authentication: authenticationSlice.reducer,
  },
});

export default store;
