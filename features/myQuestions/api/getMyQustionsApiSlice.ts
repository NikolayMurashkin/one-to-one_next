import { apiSlice } from '@shared/api/apiSlice';
import { IGetMyQuestionResponse } from '@features/myQuestions/model/myQuestionsSliceTypes';
import { FetchArgs } from '@reduxjs/toolkit/dist/query';

type IGetMyQuestionsRequest = { userId: number } & { page: number };

export const getMyQuestionsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getMyQuestions: builder.query<
			IGetMyQuestionResponse,
			number
		>({
			query: (userId) =>
				`/user/${userId}/question?search=userId:${userId}&size=3000`,
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
