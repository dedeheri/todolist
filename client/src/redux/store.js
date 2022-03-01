import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

// reducers
import reducers from "./reducer";

const store = createStore(reducers, compose(applyMiddleware(thunk)));

export default store;
