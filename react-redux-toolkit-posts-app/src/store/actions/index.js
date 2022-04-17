import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPosts = createAsyncThunk("posts/getPosts", () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((json) => json);
});

export const addPost = createAsyncThunk("posts/getPosts", () => {
  return fetch("https://jsonplaceholder.typicode.com/posts")
    .then((response) => {
      if (!response.ok) throw Error(response.statusText);
      return response.json();
    })
    .then((json) => json);
});
