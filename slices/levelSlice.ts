import { createSlice } from '@reduxjs/toolkit';
import { LevelState } from '../redux';

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
	name: 'technology',
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
