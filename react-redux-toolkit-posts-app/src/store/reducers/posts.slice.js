import { createSlice } from "@reduxjs/toolkit";
import { getPosts } from "../actions";

const initialState = {
  loading: "",
  data: [],
};

const postSlice = createSlice({
  name: "post",
  initialState: initialState,
  reducers: {
    addPost: (state, action) => {
      state.data = [...state.data, action.payload];
    },
    getPost: (state, action) => {
      state.data = action.payload;
    },
  },
  extraReducers: {
    [getPosts.pending]: (state) => {
      state.loading = "yes";
    },
    [getPosts.rejected]: (state, action) => {
      state.loading = "";
      state.error = action.error.message;
    },
    [getPosts.fulfilled]: (state, action) => {
      state.loading = "";
      state.data = action.payload;
    },
  },
});

export const { addPost, getPost } = postSlice.actions;
export const postReducer = postSlice.reducer;
