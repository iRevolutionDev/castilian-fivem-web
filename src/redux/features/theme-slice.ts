import type { Theme } from "@/@types/theme";
import { type PayloadAction, createSlice } from "@reduxjs/toolkit";

type ThemeSliceState = {
	theme: Theme;
};

const initialState: ThemeSliceState = {
	theme: "system",
};

export const themeSlice = createSlice({
	name: "theme",
	initialState,
	reducers: {
		setTheme: (state, action: PayloadAction<Theme>) => {
			state.theme = action.payload;
		},
	},
});

export const themeReducer = themeSlice.reducer;
export const { setTheme } = themeSlice.actions;
