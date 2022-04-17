/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";

import { connect } from "react-redux";

import Base from "../../containers/Base";
// import List from "../../components/List";

import { addPost, getPosts } from "../../store/actions";

const mapStateToProps = (state) => {
  console.log(state)
  return { posts: state.allPosts.data.slice(0, 10) };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (article) => dispatch(addPost(article)),
    getPosts: () => dispatch(getPosts()),
  };
};

const Home = (props) => {
  const { posts, getPosts } = props;

  console.log(posts);

  useEffect(() => {
    getPosts();
  }, []);

  return (
    <Base>
      <div>
        <h1>This is the home page</h1>
      </div>
      {/* <List/> */}
    </Base>
  );
};

// export default Home;
export default connect(mapStateToProps, mapDispatchToProps)(Home);
