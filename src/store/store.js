import { configureStore } from "@reduxjs/toolkit";
import reducer from './newProduct';
// import reducer from "./newCurrentUser";
// import reducer from "./newCart";
import logger from "./middleware/logger";
import api from "./middleware/api"

const store = configureStore({
    reducer
});

// using middleware
// const store = configureStore({
//     reducer,
//     middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger, api)
// });


export default store;

// import { ConfigureStore } from "webpack";