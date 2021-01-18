import { configureStore } from "@reduxjs/toolkit";
import rootReducer from "redux/rootReducer";
import middleware from "redux/middleware";
import initState from "redux/initState";

const devTools = process.env.NODE_ENV !== "production";

export default configureStore({
	reducer: rootReducer,
	middleware,
	preloadedState: initState,
	devTools,
});
