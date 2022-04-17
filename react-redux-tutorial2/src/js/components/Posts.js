import React, { Component } from "react";
import { connect } from "react-redux";
import { getData } from "../actions/index";

export class Post extends Component {
  componentDidMount() {
    // calling the new action creator
    // this.props.getData();
    this.props.getData("https://my-json-server.typicode.com/typicode/demo/posts")
  }

  render() {
    return (
      <ul>
        {this.props.articles.map((el) => (
          <li key={el.id}>{el.title}</li>
        ))}
      </ul>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.remoteArticles.slice(0, 10),
  };
}

export default connect(mapStateToProps, { getData })(Post);
