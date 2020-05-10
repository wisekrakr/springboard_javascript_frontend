import axios from "axios";

import {
  GET_TASK,
  GET_TASKS,
  ADD_TASK,
  DELETE_TASK,
  GET_ERRORS,
} from "./types";

export const addProjectTask = (task) => async (dispatch) => {
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  console.log(task);

  try {
    const res = await axios.post("/api/board", task, config);

    dispatch({
      type: ADD_TASK,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const getAllProjectTasks = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/board/all");
    dispatch({
      type: GET_TASKS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const getProjectTask = (id) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/board/${id}`);

    dispatch({
      type: GET_TASK,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};

export const deleteProjectTask = (task_id) => async (dispatch) => {
  try {
    await axios.delete(`/api/board/${task_id}`);
    console.log(task_id);

    dispatch({
      type: DELETE_TASK,
      payload: task_id,
    });
  } catch (error) {
    dispatch({
      type: GET_ERRORS,
      payload: error.response.data,
    });
  }
};
