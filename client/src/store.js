// src/store.js
import { createStore, combineReducers, applyMiddleware } from "redux";
import { thunk } from "redux-thunk";
import { actionListReducer, actionLogReducer } from "./reducers/actionReducers";
import { authReducer, userProfileReducer } from "./reducers/authReducers";
import {
  initiativeListReducer,
  initiativeDetailsReducer,
  initiativeCreateReducer,
} from "./reducers/initiativeReducers";
import {
  postListReducer,
  postCreateReducer,
  postLikeReducer,
  postCommentReducer,
} from "./reducers/postReducers";
import {
  challengeListReducer,
  challengeCreateReducer,
} from "./reducers/challengeReducers";
import {
  resourceListReducer,
  resourceCreateReducer,
} from "./reducers/resourceReducers";

const reducer = combineReducers({
  actionList: actionListReducer,
  auth: authReducer,
  initiativeList: initiativeListReducer,
  initiativeDetails: initiativeDetailsReducer,
  initiativeCreate: initiativeCreateReducer,
  postList: postListReducer,
  postCreate: postCreateReducer,
  postLike: postLikeReducer,
  postComment: postCommentReducer,
  challengeList: challengeListReducer,
  challengeCreate: challengeCreateReducer,
  resourceList: resourceListReducer,
  resourceCreate: resourceCreateReducer,
});
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;
const initialState = {
  auth: { userInfo: userInfoFromStorage },
};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  applyMiddleware(...middleware)
);

export default store;
