import { createSlice } from '@reduxjs/toolkit';
import { ISetInterview } from '../redux';

const initialState: ISetInterview = {
	date: '',
	initiatorName: '',
	interviewId: 0,
	initiatorId: 0,
};

const interviewSlice = createSlice({
	name: 'technology',
	initialState,
	reducers: {
		setInterview(state, action) {
			state.date = action.payload.date;
			state.initiatorName = action.payload.initiatorName;
			state.interviewId = action.payload.interviewId;
			state.initiatorId = action.payload.initiatorId;
		},
	},
});
export const { setInterview } = interviewSlice.actions;
export default interviewSlice.reducer;
