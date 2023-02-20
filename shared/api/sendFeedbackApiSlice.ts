import { IGetMyInterviewsResponse } from '@features/myInterviews/model/interviewItemSliceTypes';
import { apiSlice } from '@shared/api';
import { ISendFeedbackRequest } from './sendFeedbackTypes';

export const sendFeedbackApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		sendFeedback: builder.mutation<
			IGetMyInterviewsResponse,
			ISendFeedbackRequest
		>({
			query: (body) => ({
				url: '/user/one-to-one/feedback/create',
				method: 'POST',
				body,
				headers: {
					'Content-type': 'application/json',
				},
			}),

			invalidatesTags: [{ type: 'Interview', id: 'InterviewList' }],
		}),
	}),
});

export const { useSendFeedbackMutation } = sendFeedbackApiSlice;
