import { postReducer } from "./posts.slice";

const rootReducer = {
  allPosts: postReducer,
};

export default rootReducer;
