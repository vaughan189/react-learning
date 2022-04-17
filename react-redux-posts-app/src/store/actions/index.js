import { ADD_POST } from "../constants/actionTypes";

export const addPost = (payload) => {
  return { type: ADD_POST, payload };
};

export const getPosts = () => {
  return function (dispatch) {
    return fetch("https://jsonplaceholder.typicode.com/posts")
      .then((response) => response.json())
      .then((json) => {
        dispatch({ type: "DATA_LOADED", payload: json });
      });
  };
};
