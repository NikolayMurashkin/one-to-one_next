import { createSlice } from '@reduxjs/toolkit';
import { ISetInterview } from '../redux';

const initialState: ISetInterview = {
	date: '',
	initiatorName: ''
};

const interviewSlice = createSlice({
	name: 'technology',
	initialState,
	reducers: {
		setInterview(state, action) {
			state.date = action.payload.date;
			state.initiatorName = action.payload.initiatorName;
		},
	},
});
export const { setInterview } = interviewSlice.actions;
export default interviewSlice.reducer;
