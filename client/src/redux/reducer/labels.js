import { FAILED_GET_LABEL, GET_LABEL } from "../action-type";

const intialState = {
  loading: true,
  success: {
    labels: [],
  },
  failed: {
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
    default:
      return state;
  }
}

export default labels;
