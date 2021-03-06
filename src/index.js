import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./containers/App";

import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers/index.js";
// import root reducer

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

// For using Redux without the Dev Tools
// const store = createStore(
//   rootReducer,
//   applyMiddleware(thunk)
// );

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
