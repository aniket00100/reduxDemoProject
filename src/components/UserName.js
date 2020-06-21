import React from "react";
import { connect } from "react-redux";

import { getUser } from "../actions";

class UserName extends React.Component {
  componentDidMount() {
    this.props.getUser(this.props.userId);
  }

  render() {
    if (!this.props.user) {
      return null;
    }
    return <div className="header">{this.props.user.name}</div>;
  }
}

const mapStateToProps = (state, ownProps) => {
  const user = state.users.find((user) => user.id === ownProps.userId);
  return { user: user };
};

export default connect(mapStateToProps, { getUser })(UserName);
