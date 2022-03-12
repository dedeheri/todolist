import * as actionType from "../action-type";

const initalState = {
  loading: true,
  login: {
    loading: true,
    message: [],
    authorization: false,
    error: [],
    formError: false,
    is_login: true,
  },

  register: {
    success: [],
    validation: [],
    error: [],
    formError: false,
  },

  users: {
    data: [],
    error: [],
  },

  forgot: {
    isFetching: false,
    message: "",
    error: "",
  },

  reset: {
    isFetching: false,
    message: "",
    error: "",
    invalide_signature: false,
  },
};

function authorization(state = initalState, action) {
  switch (action.type) {
    case actionType.GET_LOGGIN: {
      return {
        ...state,
        login: {
          loading: false,
          authorization: true,
          message: action.payload,
        },
      };
    }
    case actionType.FAILED_GET_LOGGIN: {
      return {
        ...state,
        login: {
          formError: true,
          loading: false,
          error: action.payload,
        },
      };
    }

    case actionType.IS_LOGGIN: {
      return {
        ...state,
        login: {
          is_login: true,
        },
      };
    }

    case actionType.GET_REGISTER: {
      return {
        ...state,
        loading: true,
        register: {
          success: action.payload,
        },
      };
    }

    case actionType.FAILED_REGISTER: {
      return {
        ...state,
        loading: true,
        register: {
          formError: true,
          error: action.payload,
        },
      };
    }

    case actionType.START_FORGOT_PASSWORD: {
      return {
        ...state,
        forgot: {
          isFetching: true,
        },
      };
    }

    case actionType.FORGOT_PASSWORD: {
      return {
        ...state,
        forgot: {
          isFetching: false,
          message: action.payload,
        },
      };
    }

    case actionType.FAILED_FORGOT_PASSWORD: {
      return {
        ...state,
        forgot: {
          isFetching: false,
          error: action.payload,
        },
      };
    }

    case actionType.START_RESET_PASSWORD: {
      return {
        ...state,
        reset: {
          isFetching: true,
        },
      };
    }

    case actionType.RESET_PASSWORD: {
      return {
        ...state,
        reset: {
          isFetching: false,
          message: action.payload,
        },
      };
    }

    case actionType.FAILED_RESET_PASSWORD: {
      return {
        ...state,
        reset: {
          isFetching: false,
          error: action.payload,
        },
      };
    }

    case actionType.INVALIDE_SIGNATURE_RESET_PASSWORD: {
      return {
        ...state,
        reset: {
          isFetching: false,
          invalide_signature: true,
        },
      };
    }

    case actionType.GET_DATA_USERS: {
      return {
        ...state,
        loading: false,
        users: {
          data: action.payload,
        },
      };
    }

    case actionType.REMOVE_DATA_IN_ADD_TASK: {
      return {
        ...state,
        loading: false,
        users: {},
      };
    }

    case actionType.FAILED_GET_DATA_USERS: {
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
