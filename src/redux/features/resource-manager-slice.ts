import { createSlice } from "@reduxjs/toolkit";

type ResourceManagerState = {
	resourceName: string;
	loading: boolean;
	percentage?: number;
};

const initialState: ResourceManagerState = {
	resourceName: "",
	loading: true,
	percentage: 0,
};

const resourceManagerSlice = createSlice({
	name: "resourceManager",
	initialState,
	reducers: {
		setResourceName(state, action) {
			state.resourceName = action.payload;
		},
		setLoading(state, action) {
			state.loading = action.payload;
		},
		setPercentage(state, action) {
			state.percentage = action.payload;
		},
	},
});

export const { setResourceName, setLoading, setPercentage } =
	resourceManagerSlice.actions;
export const resourceReducer = resourceManagerSlice.reducer;
