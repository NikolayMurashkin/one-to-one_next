import { createSlice } from '@reduxjs/toolkit';

export type Tab = {
	tab: number;
	selectedTab: number;
};

const initialState: Tab = {
	tab: 1,
	selectedTab: 1,
};

const tabSlice = createSlice({
	name: 'tabs',
	initialState,
	reducers: {
		setSelectedTab(state, action) {
			state.selectedTab = action.payload;
		},
	},
});
export const { setSelectedTab } = tabSlice.actions;
export default tabSlice.reducer;
