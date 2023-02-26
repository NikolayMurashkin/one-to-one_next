import { apiSlice } from '@shared/api/apiSlice';
import { IAcceptInterview, IInterviewItem } from '../model/searchInterviewItemTypes';

export const acceptInterviewApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		acceptInterview: builder.mutation<IInterviewItem, IAcceptInterview>({
			query: (body) => ({
				url: `/one-to-one`,
				method: 'PUT',
				body,
			}),
			invalidatesTags: [{ type: 'Interview', id: 'InterviewList' }],
		}),
	}),
});

export const { useAcceptInterviewMutation } = acceptInterviewApiSlice;
