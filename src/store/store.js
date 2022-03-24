import { createStore } from "redux";
// import reducer from "./product/reducerProduct";
import reducer from "./product";

import { devToolsEnhancer } from "redux-devtools-extension";

const store = createStore(
    reducer,
    // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    devToolsEnhancer({ trace: true })
);

export default store;

