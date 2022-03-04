import {
  ADD_LABEL,
  FAILED_ADD_LABEL,
  FAILED_GET_LABEL,
  GET_LABEL,
  REMOVE_MESSAGE_ADD_LABEL,
} from "../action-type";

const intialState = {
  loading: true,
  success: {
    labels: [],
  },
  failed: {
    error: [],
  },

  add: {
    message: [],
    error: [],
  },
};

function labels(state = intialState, action) {
  switch (action.type) {
    case GET_LABEL: {
      return {
        ...state,
        loading: false,
        success: {
          labels: action.payload,
        },
      };
    }
    case FAILED_GET_LABEL: {
      return {
        ...state,
        loading: false,
        failed: {
          error: action.payload,
        },
      };
    }

    case ADD_LABEL: {
      return {
        ...state,
        loading: false,
        add: {
          message: action.payload,
        },
      };
    }

    case FAILED_ADD_LABEL: {
      return {
        ...state,
        loading: false,
        add: {
          error: action.payload,
        },
      };
    }

    case REMOVE_MESSAGE_ADD_LABEL: {
      return {
        ...state,
        loading: true,
        add: {},
      };
    }
    default:
      return state;
  }
}

export default labels;
