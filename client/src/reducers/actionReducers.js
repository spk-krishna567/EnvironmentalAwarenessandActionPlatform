// src/reducers/actionReducers.js
import {
  ACTION_ADD_REQUEST,
  ACTION_ADD_SUCCESS,
  ACTION_ADD_FAIL,
  ACTION_LIST_REQUEST,
  ACTION_LIST_SUCCESS,
  ACTION_LIST_FAIL,
} from "../constants/actionConstants";

const initialState = {
  actions: [],
  loading: false,
  error: null,
};

export const actionListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_LIST_REQUEST:
      return { ...state, loading: true };
    case ACTION_LIST_SUCCESS:
      return { ...state, loading: false, actions: action.payload };
    case ACTION_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    case ACTION_ADD_REQUEST:
      return { ...state, loading: true };
    case ACTION_ADD_SUCCESS:
      return {
        ...state,
        loading: false,
        actions: [...state.actions, action.payload],
      };
    case ACTION_ADD_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};
