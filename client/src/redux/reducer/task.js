import {
  ADD_TASK,
  ARCHIVE_TASK,
  DELETE_TASK,
  FAILED_ADD_TASK,
  FAILED_ARCHIVE_TASK,
  FAILED_DELETE_TASK,
  FAILED_GET_TASK,
  FAILED_PINS_TASK,
  GET_DETAIL_TASK,
  GET_TASK,
  GET_TASK_BY_LABEL,
  NO_DATA_IN_TASK_BY_LABEL,
  PINS_TASK,
  REMOVE_DATA_IN_ADD_TASK,
  REMOVE_DELETE_TASK,
  REMOVE_MESSAGE_ARCHIVE_TASK,
  REMOVE_MESSAGE_PINS_TASK,
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
    id: "",
  },

  pin: {
    message_pin: "",
    error_pin: "",
  },

  delete: {
    message_delete: "",
    error_delete: "",
  },

  archive: {
    message_archive: "",
    error_archive: "",
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

    case PINS_TASK: {
      return {
        ...state,
        loading: false,
        pin: {
          message_pin: action.payload,
        },
      };
    }

    case REMOVE_MESSAGE_PINS_TASK: {
      return {
        ...state,
        loading: false,
        pin: {},
      };
    }

    case FAILED_PINS_TASK: {
      return {
        ...state,
        loading: false,
        pin: {
          error_pin: action.payload,
        },
      };
    }

    case ARCHIVE_TASK: {
      return {
        ...state,
        loading: false,
        archive: {
          message_archive: action.payload,
        },
      };
    }

    case REMOVE_MESSAGE_ARCHIVE_TASK: {
      return {
        ...state,
        loading: false,
        archive: {},
      };
    }

    case FAILED_ARCHIVE_TASK: {
      return {
        ...state,
        loading: false,
        archive: {
          error_archive: action.payload,
        },
      };
    }

    case DELETE_TASK: {
      return {
        ...state,
        loading: false,
        delete: {
          message_delete: action.payload,
        },
      };
    }

    case REMOVE_DELETE_TASK: {
      return {
        ...state,
        loading: false,
        delete: {},
      };
    }

    case FAILED_DELETE_TASK: {
      return {
        ...state,
        loading: false,
        delete: {
          error_delete: action.payload,
        },
      };
    }

    default:
      return state;
  }
}

export default task;
