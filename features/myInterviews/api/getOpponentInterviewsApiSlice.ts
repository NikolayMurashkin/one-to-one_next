import { apiSlice } from '@shared/api/apiSlice';
import { IGetMyInterviewsResponse } from '@features/myInterviews/model/interviewItemSliceTypes';

export const getOpponentApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getOpponentInterviews: builder.query<
			IGetMyInterviewsResponse,
			number | undefined
		>({
			query: (id) => `/one-to-one?search=opponent.id:${id}`,
			providesTags: (result) =>
				result
					? [
							...result.items.map(({ id }) => ({
								type: 'Interview' as const,
								id,
							})),
							{ type: 'Interview', id: 'InterviewList' },
					  ]
					: [{ type: 'Interview', id: 'InterviewList' }],
		}),
	}),
});

export const { useGetOpponentInterviewsQuery } = getOpponentApiSlice;
