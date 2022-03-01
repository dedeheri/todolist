import { FAILED_GET_TASK, GET_TASK } from "../action-type";

const intialState = {
  success: {
    task: [],
  },
  loading: true,
  failed: {
    error: [],
  },
};

function task(state = intialState, action) {
  switch (action.type) {
    case GET_TASK: {
      return {
        ...state,
        loading: false,
        success: {
          task: action.payload,
        },
      };
    }
    case FAILED_GET_TASK: {
      return {
        ...state,
        loading: false,
        failed: {
          error: action.payload,
        },
      };
    }

    default:
      return state;
  }
}

export default task;
