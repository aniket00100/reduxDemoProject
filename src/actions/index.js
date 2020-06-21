import _ from "lodash";

import jsonPlaceholder from "../apis/jsonPlaceholder";

export const getPostList = () => async (dispatch) => {
  const response = await jsonPlaceholder.get("/posts");

  dispatch({ type: "GET_POST_LIST", payload: response.data });
};

export const getUser = (id) => (dispatch) => {
  _getUser(id, dispatch);
};

const _getUser = _.memoize(async (id, dispatch) => {
  const response = await jsonPlaceholder.get(`/users/${id}`);

  dispatch({ type: "GET_USER", payload: response.data });
});
