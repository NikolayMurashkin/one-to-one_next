import { apiSlice } from '@shared/api/apiSlice';
import { IGetMyInterviewsResponse } from '@features/myInterviews/model/interviewItemSliceTypes';

export const getMyInterviewsApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getMyInterviews: builder.query<IGetMyInterviewsResponse, void>({
			query: () => `/one-to-one?size=50`,
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

export const { useGetMyInterviewsQuery } = getMyInterviewsApiSlice;
