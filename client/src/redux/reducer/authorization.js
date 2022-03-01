const { GET_LOGGIN, FAILED_GET_LOGGIN } = require("../action-type");

const initalState = {
  loading: true,
  success: {
    message: [],
  },
  failed: {
    error: [],
    validation: [],
  },
};

function authorization(state = initalState, action) {
  switch (action.type) {
    case GET_LOGGIN: {
      return {
        ...state,
        loading: false,
        success: {
          message: action.payload,
        },
      };
    }
    case FAILED_GET_LOGGIN: {
      return {
        ...state,
        loading: false,
        failed: {
          error: action.error,
          validation: action.validation,
        },
      };
    }

    default:
      return state;
  }
}

export default authorization;
