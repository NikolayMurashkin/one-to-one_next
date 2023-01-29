import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { ISetQuestions } from '../redux';

const initialState: ISetQuestions = {
	questions: [],
};

const questionsSlice = createSlice({
	name: 'question',
	initialState,
	reducers: {
		setQuestions(state, action) {
			state.questions.push(action.payload);
		},
		removeQuestion(state, action) {
			state.questions = state.questions.filter(
				(question) => question.id !== action.payload
			);
		},
	},
});

export const { setQuestions, removeQuestion } = questionsSlice.actions;
export default questionsSlice.reducer;
