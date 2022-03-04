import {
  ADD_TASK,
  FAILED_ADD_TASK,
  FAILED_GET_TASK,
  GET_DETAIL_TASK,
  GET_TASK,
  GET_TASK_BY_LABEL,
  NO_DATA_IN_TASK_BY_LABEL,
  REMOVE_DATA_IN_ADD_TASK,
} from "../action-type";

const intialState = {
  success: {
    task: [],
  },
  loading: true,
  failed: {
    error: [],
  },

  add: {
    message: "",
    error: "",
  },

  byLabel: {
    task: [],
    message: [],
  },

  detail: {
    task: [],
    error: {},
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
    case ADD_TASK: {
      return {
        ...state,
        loading: false,
        add: {
          message: action.payload,
        },
      };
    }

    case FAILED_ADD_TASK: {
      return {
        ...state,
        loading: false,
        add: {
          error: action.payload,
        },
      };
    }

    case REMOVE_DATA_IN_ADD_TASK: {
      return {
        ...state,
        loading: true,
        add: {},
      };
    }

    case GET_TASK_BY_LABEL: {
      return {
        ...state,
        loading: false,
        byLabel: {
          task: action.payload,
        },
      };
    }

    case NO_DATA_IN_TASK_BY_LABEL: {
      return {
        ...state,
        loading: false,
        byLabel: {
          message: action.payload,
        },
      };
    }

    case GET_DETAIL_TASK: {
      return {
        ...state,
        loading: false,
        detail: {
          task: action.payload,
        },
      };
    }
    default:
      return state;
  }
}

export default task;
