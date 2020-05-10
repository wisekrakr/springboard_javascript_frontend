import {
  ADD_TASK,
  GET_TASK,
  GET_TASKS,
  DELETE_TASK,
  GET_ERRORS,
} from "../actions/types";

const initialState = {
  task: {},
  tasks: [],
  errors: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [action.payload, ...state.tasks],
        errors: {},
      };
    case GET_TASK:
      return { ...state, task: action.payload, errors: {} };
    case GET_TASKS:
      return { ...state, tasks: action.payload, errors: {} };
    case DELETE_TASK:
      return {
        ...state,
        tasks: state.tasks.filter((task) => task.id !== action.payload),
        errors: {},
      };
    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };
    default:
      return state;
  }
}
