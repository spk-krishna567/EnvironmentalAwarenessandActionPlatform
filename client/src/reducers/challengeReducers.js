// src/reducers/challengeReducers.js
import {
  CHALLENGE_LIST_REQUEST,
  CHALLENGE_LIST_SUCCESS,
  CHALLENGE_LIST_FAIL,
  CHALLENGE_CREATE_REQUEST,
  CHALLENGE_CREATE_SUCCESS,
  CHALLENGE_CREATE_FAIL,
} from "../constants/challengeConstants";

const initialState = {
  challenges: [],
  loading: false,
  error: null,
};

export const challengeListReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHALLENGE_LIST_REQUEST:
      return { ...state, loading: true };
    case CHALLENGE_LIST_SUCCESS:
      return { ...state, loading: false, challenges: action.payload };
    case CHALLENGE_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const challengeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case CHALLENGE_CREATE_REQUEST:
      return { loading: true };
    case CHALLENGE_CREATE_SUCCESS:
      return { loading: false, success: true, challenge: action.payload };
    case CHALLENGE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
