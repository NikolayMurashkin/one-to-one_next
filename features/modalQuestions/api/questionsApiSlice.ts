import { apiSlice } from '@shared/api';

export type AddQuestion = {
	userId: number;
	questions: IQuestion[];
};
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

export const questionsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		addQuestions: builder.mutation<IQuestion, AddQuestion>({
			query: (body) => ({
				url: `/user/${body.userId}/question/create`,
				method: 'POST',
				body,
			}),
			invalidatesTags: [{ type: 'Questions', id: 'QuestionsList' }],
		}),
	}),
});

export const { useAddQuestionsMutation } = questionsApiSlice;
