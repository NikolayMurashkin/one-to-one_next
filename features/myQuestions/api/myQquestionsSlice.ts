import { createSlice } from '@reduxjs/toolkit';
import { ISetQuestions } from '@features/myQuestions/model/myQuestionsSliceTypes';

const initialState: ISetQuestions = {
	questions: [],
};

const myQuestionsSlice = createSlice({
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

export const { setQuestions, removeQuestion } = myQuestionsSlice.actions;
export default myQuestionsSlice.reducer;
