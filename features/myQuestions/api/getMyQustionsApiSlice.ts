import { apiSlice } from '@shared/api/apiSlice';
import { IGetMyQuestionResponse } from '@features/myQuestions/model/myQuestionsSliceTypes';

export const getMyQuestionsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getMyQuestions: builder.query<IGetMyQuestionResponse, number>({
			query: (userid) => `/user/${userid}/question`,
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

export const { useGetMyQuestionsQuery } = getMyQuestionsApiSlice;
