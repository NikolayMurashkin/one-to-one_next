import { createSlice } from '@reduxjs/toolkit';
import { ISetAcceptedQuestions } from '../redux';

const initialState: ISetAcceptedQuestions = {
	questions: [],
};

const acceptedQuestionsSlice = createSlice({
	name: 'question',
	initialState,
	reducers: {
		acceptQuestion(state, action) {
			if (
				state.questions.some(
					(item) => item.question.id === action.payload.question.id
				)
			) {
				state.questions = state.questions.map((item) => {
					if (item.question.id === action.payload.question.id) {
						item = action.payload;
						return item;
					} else {
						return item;
					}
				});
			} else {
				state.questions.push(action.payload);
			}
		},
	},
});

export const { acceptQuestion } = acceptedQuestionsSlice.actions;
export default acceptedQuestionsSlice.reducer;
