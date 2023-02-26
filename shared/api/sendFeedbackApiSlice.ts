import { apiSlice } from '@shared/api';
import { ISendFeedbackRequest, ISendFeedbackResponse } from './sendFeedbackTypes';

export const sendFeedbackApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		sendFeedback: builder.mutation<
			ISendFeedbackResponse,
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
