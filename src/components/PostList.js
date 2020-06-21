import React from "react";
import { connect } from "react-redux";

import { getPostList } from "../actions";
import UserName from "./UserName";

class PostList extends React.Component {
  componentDidMount = () => {
    this.props.getPostList();
  };

  renderPostList = () => {
    return this.props.posts.map((post) => {
      return (
        <div className="item" key={post.id}>
          <i className="large middle aligned icon user"></i>
          <div className="content">
            <div className="description">
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
            <UserName userId={post.userId} />
          </div>
        </div>
      );
    });
  };

  render() {
    console.log(this.props.posts);
    return (
      <div className="ui relaxed divided list">{this.renderPostList()}</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.posts,
  };
};

export default connect(mapStateToProps, { getPostList })(PostList);
