import { configureStore } from "@reduxjs/toolkit";
import reducer from './newProduct';

const store = configureStore({
    reducer
});

export default store;

// import { ConfigureStore } from "webpack";