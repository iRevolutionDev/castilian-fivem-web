import { resourceReducer } from "@/redux/features/resource-manager-slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const rootReducers = combineReducers({
	resourceManager: resourceReducer,
});

export const store = configureStore({
	reducer: rootReducers,
	devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
