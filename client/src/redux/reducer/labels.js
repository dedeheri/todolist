import * as actionTypes from "../action-type";

const intialState = {
  loading: true,
  success: {
    labels: [],
  },
  failed: {
    error: [],
  },

  add: {
    error: [],
  },
};

function labels(state = intialState, action) {
  switch (action.type) {
    case actionTypes.GET_LABEL: {
      return {
        ...state,
        loading: false,
        success: {
          labels: action.payload,
        },
      };
    }
    case actionTypes.FAILED_GET_LABEL: {
      return {
        ...state,
        loading: false,
        failed: {
          error: action.payload,
        },
      };
    }

    case actionTypes.ADD_LABEL: {
      return {
        ...state,
        loading: false,
        add: {
          message: action.payload,
        },
      };
    }

    case actionTypes.FAILED_ADD_LABEL: {
      return {
        ...state,
        loading: false,
        add: {
          error: action.payload,
        },
      };
    }

    case actionTypes.REMOVE_MESSAGE_ADD_LABEL: {
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
