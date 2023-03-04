import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetInterview } from '@features/myInterviews/model/interviewItemSliceTypes';

const initialState: ISetInterview = {
	date: '',
	initiatorName: '',
	interviewId: 0,
	initiatorId: 0,
	level: '',
	status: '',
	stack: '',
	opponentId: 0,
};

const interviewSlice = createSlice({
	name: 'technology',
	initialState,
	reducers: {
		setInterview(state, action: PayloadAction<ISetInterview>) {
			state.date = action.payload.date;
			state.initiatorName = action.payload.initiatorName;
			state.interviewId = action.payload.interviewId;
			state.initiatorId = action.payload.initiatorId;
			state.level = action.payload.level;
			state.opponentId = action.payload.opponentId;
		},
	},
});
export const { setInterview } = interviewSlice.actions;
export default interviewSlice.reducer;
