import * as actionTypes from "../action-type";

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
    message_no_data: "",
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

  getByArchive: {
    loading: true,
    archive: [],
    message: [],
  },
};

function task(state = intialState, action) {
  switch (action.type) {
    case actionTypes.GET_TASK_BY_ARCHIVE: {
      return {
        ...state,
        getByArchive: {
          archive: action.payload,
          loading: false,
        },
      };
    }
    case actionTypes.MESSAGE_GET_TASK_BY_ARCHIVE: {
      return {
        ...state,
        getByArchive: {
          loading: false,
          message: action.payload,
        },
      };
    }
    case actionTypes.GET_TASK: {
      return {
        ...state,
        loading: false,
        success: {
          task: action.payload,
        },
      };
    }
    case actionTypes.FAILED_GET_TASK: {
      return {
        ...state,
        loading: false,
        failed: {
          error: action.payload,
        },
      };
    }
    case actionTypes.ADD_TASK: {
      return {
        ...state,
        loading: false,
        add: {
          message: action.payload,
        },
      };
    }

    case actionTypes.FAILED_ADD_TASK: {
      return {
        ...state,
        loading: false,
        add: {
          error: action.payload,
        },
      };
    }

    case actionTypes.REMOVE_DATA_IN_ADD_TASK: {
      return {
        ...state,
        loading: true,
        add: {},
      };
    }

    case actionTypes.GET_TASK_BY_LABEL: {
      return {
        ...state,
        loading: false,
        byLabel: {
          task: action.payload,
        },
      };
    }

    case actionTypes.NO_DATA_IN_TASK_BY_LABEL: {
      return {
        ...state,
        loading: false,
        byLabel: {
          message: action.payload,
        },
      };
    }

    case actionTypes.GET_DETAIL_TASK: {
      return {
        ...state,
        loading: false,
        detail: {
          task: action.payload,
        },
      };
    }

    case actionTypes.PINS_TASK: {
      return {
        ...state,
        loading: false,
        pin: {
          message_pin: action.payload,
        },
      };
    }

    case actionTypes.REMOVE_MESSAGE_PINS_TASK: {
      return {
        ...state,
        loading: false,
        pin: {},
      };
    }

    case actionTypes.FAILED_PINS_TASK: {
      return {
        ...state,
        loading: false,
        pin: {
          error_pin: action.payload,
        },
      };
    }

    case actionTypes.ARCHIVE_TASK: {
      return {
        ...state,
        loading: false,
        archive: {
          message_archive: action.payload,
        },
      };
    }

    case actionTypes.REMOVE_MESSAGE_ARCHIVE_TASK: {
      return {
        ...state,
        loading: false,
        archive: {},
      };
    }

    case actionTypes.FAILED_ARCHIVE_TASK: {
      return {
        ...state,
        loading: false,
        archive: {
          error_archive: action.payload,
        },
      };
    }

    case actionTypes.DELETE_TASK: {
      return {
        ...state,
        loading: false,
        delete: {
          message_delete: action.payload,
        },
      };
    }

    case actionTypes.REMOVE_DELETE_TASK: {
      return {
        ...state,
        loading: false,
        delete: {},
      };
    }

    case actionTypes.FAILED_DELETE_TASK: {
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
