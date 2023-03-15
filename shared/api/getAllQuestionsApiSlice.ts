import { apiSlice } from '@shared/api';

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
export interface IGetAllQuestionResponse {
	items: IQuestion[];
	totalItems?: string;
}

export const getAllQuestionsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllQuestions: builder.query<IGetAllQuestionResponse, number>({
			query: (userid) =>
				`/user/${userid}/question?search=userId:${userid}&size=3000`,
			providesTags: (result) =>
				result
					? [
							...result.items.map(({ id }) => ({
								type: 'Questions' as const,
								id,
							})),
							{ type: 'Questions', id: 'QuestionsList' },
					  ]
					: [{ type: 'Questions', id: 'QuestionsList' }],
		}),
	}),
});

export const { useGetAllQuestionsQuery } = getAllQuestionsApiSlice;
