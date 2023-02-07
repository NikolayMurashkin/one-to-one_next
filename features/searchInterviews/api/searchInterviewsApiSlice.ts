import { apiSlice } from '@shared/api';
import { IGetAllInterviewsResponse } from '@features/searchInterviews/model/searchInterviewsTypes';

export const registerApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getAllInterviews: builder.query<IGetAllInterviewsResponse,  void>({
			query: () => `/one-to-one?size=50&search=status:OPEN`,
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

export const { useGetAllInterviewsQuery } = registerApiSlice;

