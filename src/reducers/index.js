import { combineReducers } from "redux";

import postListReducer from "./postListReducer";
import userReducer from "./usersReducer";

export default combineReducers({
  posts: postListReducer,
  users: userReducer,
});
