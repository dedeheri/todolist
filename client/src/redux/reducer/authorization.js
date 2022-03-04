const {
  GET_LOGGIN,
  FAILED_GET_LOGGIN,
  GET_DATA_USERS,
  FAILED_GET_DATA_USERS,
} = require("../action-type");

const initalState = {
  loading: true,
  success: {
    message: [],
  },
  failed: {
    error: [],
    validation: [],
  },

  users: {
    data: [],
    error: [],
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

    case GET_DATA_USERS: {
      return {
        ...state,
        loading: false,
        users: {
          data: action.payload,
        },
      };
    }

    case FAILED_GET_DATA_USERS: {
      return {
        ...state,
        loading: false,
        users: {
          error: action.payload,
        },
      };
    }
    default:
      return state;
  }
}

export default authorization;
