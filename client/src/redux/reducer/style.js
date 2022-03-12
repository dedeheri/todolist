import * as actionTypes from "../action-type";

const initalState = {
  menu: false,
  slideTask: false,
  darkMode: false,
  grid: true,
  search: "",
  calender: false,
  detail: {
    slideDetail: false,
    idTask: "",
  },
  modal: {
    modalDelete: false,
    idTask: "",
    title: "",
  },
};

function style(state = initalState, action) {
  switch (action.type) {
    case actionTypes.MENU_COMPONENTS: {
      return {
        ...state,
        menu: action.menu,
      };
    }
    case actionTypes.MODAL_DELETE_ON: {
      return {
        ...state,
        modal: {
          modalDelete: action.modal,
          idTask: action.idTask,
          title: action.title,
        },
      };
    }
    case actionTypes.MODAL_DELETE_OFF: {
      return {
        ...state,
        modal: { modalDelete: action.modal, idTask: "" },
      };
    }
    case actionTypes.GRID_COMPONENTS: {
      return {
        ...state,
        grid: action.grid,
      };
    }
    case actionTypes.DARKMODE_ON_COMPONENTS: {
      return {
        ...state,
        darkMode: true,
      };
    }
    case actionTypes.DARKMODE_OFF_COMPONENTS: {
      return {
        ...state,
        darkMode: false,
      };
    }
    case actionTypes.SLIDETASK_COMPONENTS: {
      return {
        ...state,
        slideTask: action.slideTask,
      };
    }
    case actionTypes.SEARCH_TERM: {
      return {
        ...state,
        search: action.search,
      };
    }
    case actionTypes.REMOVE_VALUE_SEARCH_TERM: {
      return {
        ...state,
        search: "",
      };
    }
    case actionTypes.CALENDER_COMPONENTS: {
      return {
        ...state,
        calender: action.calender,
      };
    }

    case actionTypes.SLIDE_DETAIL: {
      return {
        ...state,
        detail: {
          slideDetail: action.slideDetail,
          idTask: action.idTask,
        },
      };
    }
    case actionTypes.SLIDE_OOF_DETAIL: {
      return {
        ...state,
        detail: {
          slideDetail: action.slideDetail,
          idTask: "",
        },
      };
    }
    default:
      return state;
  }
}

export default style;
