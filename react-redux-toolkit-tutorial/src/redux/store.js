import {
  configureStore,
  curryGetDefaultMiddleware,
  //   createAction,
  // createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// const fetchLinksRequest = createAction("FETCH_LINKS_REQUEST");
// const fetchLinksSuccess = createAction("FETCH_LINKS_SUCCESS");

const middleware = [
  ...curryGetDefaultMiddleware(),
  /*YOUR CUSTOM MIDDLEWARES HERE*/
];

// AUTH STATE
const authState = {
  token: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState: authState,
  reducers: {
    loginSuccess: (state, action) => {
      state.token = action.payload;
    },
    loginFailed: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { loginSuccess, loginFailed } = authSlice.actions;
const authReducer = authSlice.reducer;

export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  middleware,
});
