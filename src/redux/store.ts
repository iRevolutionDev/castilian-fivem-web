import { menuReducer } from "@/redux/features/menu-slice";
import { resourceReducer } from "@/redux/features/resource-manager-slice";
import { themeReducer } from "@/redux/features/theme-slice";
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

export const rootReducers = combineReducers({
	theme: themeReducer,
	resourceManager: resourceReducer,
	menu: menuReducer,
});

export const store = configureStore({
	reducer: rootReducers,
	devTools: process.env.NODE_ENV !== "production",
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
