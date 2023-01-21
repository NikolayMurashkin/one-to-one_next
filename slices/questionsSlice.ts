import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { IQuestion } from '../redux';


const initialState: IQuestion = {
	question: '',
	answer: '',
	technology: {
		id: undefined,
		name: '',
	},
	technologyId: undefined,
	userId: undefined,
};

const questionsSlice = createSlice({
	name: 'question',
	initialState,
	reducers: {
		setTechnologyId(state, action) {
			state.technology = action.payload
		},
	},
});

export const { setTechnologyId } = questionsSlice.actions;
export default questionsSlice.reducer;
