import {
  DARKMODE_ON_COMPONENTS,
  DARKMODE_OFF_COMPONENTS,
  GRID_COMPONENTS,
  MENU_COMPONENTS,
  REMOVE_VALUE_SEARCH_TERM,
  SEARCH_TERM,
  SLIDETASK_COMPONENTS,
  CALENDER_COMPONENTS,
  SLIDE_DETAIL,
  SLIDE_OOF_DETAIL,
} from "../action-type";

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
};

function style(state = initalState, action) {
  switch (action.type) {
    case MENU_COMPONENTS: {
      return {
        ...state,
        menu: action.menu,
      };
    }
    case GRID_COMPONENTS: {
      return {
        ...state,
        grid: action.grid,
      };
    }
    case DARKMODE_ON_COMPONENTS: {
      return {
        ...state,
        darkMode: true,
      };
    }
    case DARKMODE_OFF_COMPONENTS: {
      return {
        ...state,
        darkMode: false,
      };
    }
    case SLIDETASK_COMPONENTS: {
      return {
        ...state,
        slideTask: action.slideTask,
      };
    }
    case SEARCH_TERM: {
      return {
        ...state,
        search: action.search,
      };
    }
    case REMOVE_VALUE_SEARCH_TERM: {
      return {
        ...state,
        search: "",
      };
    }
    case CALENDER_COMPONENTS: {
      return {
        ...state,
        calender: action.calender,
      };
    }

    case SLIDE_DETAIL: {
      return {
        ...state,
        detail: {
          slideDetail: action.slideDetail,
          idTask: action.idTask,
        },
      };
    }
    case SLIDE_OOF_DETAIL: {
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
