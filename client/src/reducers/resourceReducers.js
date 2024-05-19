// src/reducers/resourceReducers.js
import {
  RESOURCE_LIST_REQUEST,
  RESOURCE_LIST_SUCCESS,
  RESOURCE_LIST_FAIL,
  RESOURCE_CREATE_REQUEST,
  RESOURCE_CREATE_SUCCESS,
  RESOURCE_CREATE_FAIL,
} from "../constants/resourceConstants";

const initialState = {
  resources: [],
  loading: false,
  error: null,
};

export const resourceListReducer = (state = initialState, action) => {
  switch (action.type) {
    case RESOURCE_LIST_REQUEST:
      return { ...state, loading: true };
    case RESOURCE_LIST_SUCCESS:
      return { ...state, loading: false, resources: action.payload };
    case RESOURCE_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const resourceCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case RESOURCE_CREATE_REQUEST:
      return { loading: true };
    case RESOURCE_CREATE_SUCCESS:
      return { loading: false, success: true, resource: action.payload };
    case RESOURCE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
