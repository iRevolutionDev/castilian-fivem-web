import { createSlice } from "@reduxjs/toolkit";

type MenuState = {
	open: boolean;
};

const initialState: MenuState = {
	open: true,
};

const menuSlice = createSlice({
	name: "menu",
	initialState,
	reducers: {
		setOpenedMenu(state, action) {
			state.open = action.payload;
		},
	},
});

export const { setOpenedMenu } = menuSlice.actions;
export const menuReducer = menuSlice.reducer;
