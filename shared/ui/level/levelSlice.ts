import { createSlice } from '@reduxjs/toolkit';

export type LevelState = {
	levelsList: { label: string; value: number }[];
	currentLevel: {
		label: string;
		value: number;
	};
};

const initialState: LevelState = {
	levelsList: [
		{
			label: 'Junior',
			value: 1,
		},
		{
			label: 'Middle',
			value: 2,
		},
		{
			label: 'Senior',
			value: 3,
		},
	],
	currentLevel: {
		label: 'Junior',
		value: 1,
	},
};

const levelSlice = createSlice({
	name: 'level',
	initialState,
	reducers: {
		setLevel(state, action) {
			state.currentLevel.value = action.payload.value;
			state.currentLevel.label = action.payload.label;
		},
	},
});
export const { setLevel } = levelSlice.actions;
export default levelSlice.reducer;
