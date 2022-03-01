import {
  DARKMODE_COMPONENTS,
  GRID_COMPONENTS,
  MENU_COMPONENTS,
  SLIDETASK_COMPONENTS,
} from "../action-type";

const initalState = {
  menu: false,
  slideTask: false,
  darkMode: true,
  grid: true,
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
    case DARKMODE_COMPONENTS: {
      return {
        ...state,
        darkMode: action.darkmode,
      };
    }
    case DARKMODE_COMPONENTS: {
      return {
        ...state,
        darkMode: action.darkmode,
      };
    }
    case SLIDETASK_COMPONENTS: {
      return {
        ...state,
        slideTask: action.slideTask,
      };
    }

    default:
      return state;
  }
}

export default style;
