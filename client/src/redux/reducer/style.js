import {
  DARKMODE_ON_COMPONENTS,
  DARKMODE_OFF_COMPONENTS,
  GRID_COMPONENTS,
  MENU_COMPONENTS,
  REMOVE_VALUE_SEARCH_TERM,
  SEARCH_TERM,
  SLIDETASK_COMPONENTS,
} from "../action-type";

const initalState = {
  menu: false,
  slideTask: false,
  darkMode: true,
  grid: true,
  search: "",
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
    default:
      return state;
  }
}

export default style;
