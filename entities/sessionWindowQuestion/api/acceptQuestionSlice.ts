import { createSlice } from '@reduxjs/toolkit';

export interface IAcceptedQuestion {
	question: {
		id: number;
		question: string;
		answer: string;
		technologyId: number;
		userId: number;
	};
	responseLevel: number;
	comment: string;
	accepted: boolean;
}
export interface ISetAcceptedQuestions {
	questions: IAcceptedQuestion[];
}

const initialState: ISetAcceptedQuestions = {
	questions: [],
};

const acceptQuestionsSlice = createSlice({
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

export const { acceptQuestion } = acceptQuestionsSlice.actions;
export default acceptQuestionsSlice.reducer;
