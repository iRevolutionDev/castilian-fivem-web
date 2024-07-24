import { createSlice } from "@reduxjs/toolkit";

type ResourceManagerState = {
	resourceName: string;
};

const initialState: ResourceManagerState = {
	resourceName: "",
};

const resourceManagerSlice = createSlice({
	name: "resourceManager",
	initialState,
	reducers: {
		setResourceName(state, action) {
			state.resourceName = action.payload;
		},
	},
});

export const { setResourceName } = resourceManagerSlice.actions;
export const resourceReducer = resourceManagerSlice.reducer;
