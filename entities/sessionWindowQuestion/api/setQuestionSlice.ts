import { createSlice } from '@reduxjs/toolkit';

export interface IQuestion {
	id?: number;
	question: string;
	answer: string;
	technology?: {
		id: number | undefined;
		name: string;
	};
	technologyId: number | undefined;
	userId: number | undefined;
}

export interface ISetQuestions {
	questions: IQuestion[];
}

const initialState: ISetQuestions = {
	questions: [],
};

const setQuestionSlice = createSlice({
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

export const { setQuestions, removeQuestion } = setQuestionSlice.actions;
export default setQuestionSlice.reducer;
