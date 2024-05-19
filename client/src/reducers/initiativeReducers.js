// src/reducers/initiativeReducers.js
import {
  INITIATIVE_LIST_REQUEST,
  INITIATIVE_LIST_SUCCESS,
  INITIATIVE_LIST_FAIL,
  INITIATIVE_DETAILS_REQUEST,
  INITIATIVE_DETAILS_SUCCESS,
  INITIATIVE_DETAILS_FAIL,
  INITIATIVE_CREATE_REQUEST,
  INITIATIVE_CREATE_SUCCESS,
  INITIATIVE_CREATE_FAIL,
} from "../constants/initiativeConstants";

export const initiativeListReducer = (state = { initiatives: [] }, action) => {
  switch (action.type) {
    case INITIATIVE_LIST_REQUEST:
      return { loading: true, initiatives: [] };
    case INITIATIVE_LIST_SUCCESS:
      return { loading: false, initiatives: action.payload };
    case INITIATIVE_LIST_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const initiativeDetailsReducer = (
  state = { initiative: {} },
  action
) => {
  switch (action.type) {
    case INITIATIVE_DETAILS_REQUEST:
      return { ...state, loading: true };
    case INITIATIVE_DETAILS_SUCCESS:
      return { loading: false, initiative: action.payload };
    case INITIATIVE_DETAILS_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const initiativeCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case INITIATIVE_CREATE_REQUEST:
      return { loading: true };
    case INITIATIVE_CREATE_SUCCESS:
      return { loading: false, success: true, initiative: action.payload };
    case INITIATIVE_CREATE_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
