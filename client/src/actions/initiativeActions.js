// src/actions/initiativeActions.js
import axios from "axios";
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
  INITIATIVE_JOIN_REQUEST,
  INITIATIVE_JOIN_SUCCESS,
  INITIATIVE_JOIN_FAIL,
} from "../constants/initiativeConstants";

export const listInitiatives = () => async (dispatch) => {
  try {
    dispatch({ type: INITIATIVE_LIST_REQUEST });

    const { data } = await axios.get("http://localhost:5000/api/initiatives");

    dispatch({ type: INITIATIVE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: INITIATIVE_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getInitiativeDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: INITIATIVE_DETAILS_REQUEST });

    const { data } = await axios.get(
      `http://localhost:5000/api/initiatives/${id}`
    );

    dispatch({ type: INITIATIVE_DETAILS_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: INITIATIVE_DETAILS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const createInitiative = (initiative) => async (dispatch, getState) => {
  try {
    dispatch({ type: INITIATIVE_CREATE_REQUEST });

    const {
      auth: { userInfo },
    } = getState();

    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      "http://localhost:5000/api/initiatives",
      initiative,
      config
    );

    dispatch({ type: INITIATIVE_CREATE_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: INITIATIVE_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const joinInitiative = (id) => async (dispatch, getState) => {
  try {
    dispatch({ type: INITIATIVE_JOIN_REQUEST });

    const {
      auth: { userInfo },
    } = getState();
    console.log(userInfo);
    const config = {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    };
    console.log(config);
    const { data } = await axios.post(
      `http://localhost:5000/api/initiatives/${id}/join`,
      {},
      config
    );
    alert(`${data.message}`);

    dispatch({
      type: INITIATIVE_JOIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    const errorMessage =
      error.response && error.response.data.message
        ? error.response.data.message
        : error.message;
    alert(`Error: ${errorMessage}`);
    dispatch({
      type: INITIATIVE_JOIN_FAIL,
      payload: errorMessage,
    });
  }
};
